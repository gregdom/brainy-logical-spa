import HomeModel from "../models/HomeModel.js";
import { body, validationResult } from 'express-validator';
import validator from 'validator';
import axios from 'axios';

class HomeController {

  async index(req, res) {
    const model = new HomeModel();
    await model.getHome((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  }

  async saveForm(req, res) {
    console.log('chamou o backend controller');

    try {
      const { token } = req.body;

      // Verificar o token do reCAPTCHA com o serviço reCAPTCHA
      const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
          secret: '6LdwfzUmAAAAAD5JkA-sQFwpwHEAjYA0arpzkXxq',
          response: token
        }
      });
      console.log(response.data);

      if (response.data.success && response.data.score > 0.5) {
        const { formData } = req.body;

        const validateFormFields = [
          body('formData.firstName')
            .notEmpty().withMessage('Não pode estar vazio')
            .isLength({ max: 25 }).withMessage('Max. 5 caracteres'),
          body('formData.lastName'),
          body('formData.email')
            .notEmpty().withMessage('Não pode estar vazio')
            .isEmail().withMessage('Não parece um email válido'),
          body('formData.companyName'),
          body('formData.companySite'),
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
        };

        console.log('Batatinha', sanitizedFormData);
        const model = new HomeModel();
        const result = await model.saveFormSQL(sanitizedFormData);

        if (result) {
          return res.status(200).json({ message: 'Recaptcha seguro' });
        } else {
          return res.status(400).json({ error: 'Erro ao salvar no banco de dados' });
        }
      } else {
        return res.status(400).json({ error: 'Falha na verificação do reCAPTCHA' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

}

export default HomeController;
