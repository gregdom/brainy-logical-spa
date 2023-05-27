import { Router } from "express"
import HomeController from "../controllers/HomeController.js"
import axios from 'axios'

const homeRouter = Router()
const HomeControllerInit = new HomeController()

homeRouter.get("/", HomeControllerInit.index)

homeRouter.post("/contact-projects", async (req, res) => {
  const { token, ...formData } = req.body;

  console.log('chamou o backend')

  try {
    // Verificar o token do reCAPTCHA com o serviço reCAPTCHA
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: '6LdwfzUmAAAAAD5JkA-sQFwpwHEAjYA0arpzkXxq',
        response: token
      }
    });

    console.log(response)

    if (response.data.success) {
      // Token válido, o usuário passou na verificação do reCAPTCHA
      // Realize as ações desejadas com os dados recebidos do formulário
      console.log(formData);

      res.status(200).json({ message: 'Formulário enviado com sucesso' });
    } else {
      // Token inválido, o usuário não passou na verificação do reCAPTCHA
      res.status(400).json({ error: 'Falha na verificação do reCAPTCHA' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
})

export default homeRouter