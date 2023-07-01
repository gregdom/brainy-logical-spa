import HomeModel from "../models/HomeModel.js";
import { body, validationResult } from 'express-validator';
import validator from 'validator';
import axios from 'axios';

class HomeController {

  async index(req, res) {
    const model = new HomeModel()
    const result = await model.getHome()
    return res.json(result)
  }

  async saveForm(req, res) {
    try {
      const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress

      const model = new HomeModel();
      const result = await model.findIP(clientIP)

      if (result === 400) {
        return res.status(400).json(
          {
            statusCode: 400,
            message: 'Você está indo muito rápido! Aguarde alguns minutos para enviar uma nova mensagem ou use nosso chat ao vivo para falar conosco!'
          });
      } else {
        const { token } = req.body;
        const secret = process.env.RECAPTCHA_SECRET
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
          params: {
            secret: secret,
            response: token
          }
        });

        if (response.data.success && response.data.score > 0.5) {
          const { formData } = req.body;

          const validateFormFields = [
            body('formData.firstName')
              .notEmpty().withMessage('Não pode estar vazio')
              .isLength({ max: 25 }).withMessage('Max. 25 caracteres'),
            body('formData.lastName').isLength({ max: 45 }).withMessage('Max. 45 caracteres'),
            body('formData.email')
              .notEmpty().withMessage('Não pode estar vazio')
              .isEmail().withMessage('Não parece um email válido')
              .isLength({ max: 45 }).withMessage('Max. 45 caracteres'),
            body('formData.companyName').isLength({ max: 45 }).withMessage('Max. 45 caracteres'),
            body('formData.companySite').isLength({ max: 45 }).withMessage('Max. 45 caracteres'),
            body('formData.projectType')
              .notEmpty().withMessage('Não pode estar vazio'),
            body('formData.projectDetails')
              .notEmpty().withMessage('Não pode estar vazio')
              .isLength({ min: 10 }).withMessage('Descrição muito curta')
              .isLength({ max: 1500 }).withMessage('Max. 1500 caracteres'),
          ];

          // Executar a validação dos campos do formulário
          await Promise.all(validateFormFields.map(field => field.run(req)));

          const errors = validationResult(req);

          // Verificar se há erros de validação
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }

          const sanitizedFormData = {
            firstName: formData.firstName ? validator.escape(formData.firstName) : '',
            lastName: formData.lastName ? validator.escape(formData.lastName) : '',
            email: formData.email ? validator.normalizeEmail(formData.email) : '',
            companyName: formData.companyName ? validator.escape(formData.companyName) : '',
            companySite: formData.companySite ? validator.escape(formData.companySite) : '',
            projectType: formData.projectType ? validator.escape(formData.projectType) : '',
            projectDetails: formData.projectDetails ? validator.escape(formData.projectDetails) : '',
            userIP: clientIP
          };

          const model = new HomeModel();
          const result = await model.saveFormSQL(sanitizedFormData);

          if (result) {
            return res.status(200).json(
              {
                statusCode: 200,
                message: 'Mensagem enviada com sucesso!'
              });
          } else {
            return res.status(400).json(
              {
                statusCode: 400,
                message: 'Houve um erro #S4002 - Tente enviar sua mensagem através do chat online se o erro persistir!'
              });
          }
        } else {
          return res.status(400).json(
            {
              statusCode: 400,
              message: 'Erro #T4002 -  Sua mensagem não foi enviada! Tente enviar sua mensagem através do chat online se o erro persistir!'
            });
        }
      }

    } catch {
      return res.status(500).json(
        {
          statusCode: 500,
          message: 'Erro interno! Sua mensagem não foi enviada! Tente enviar sua mensagem através do chat online se o erro persistir!'
        });
    }
  }


}

export default HomeController;
