import HomeModel from "../models/HomeModel.js"
import axios from 'axios'

class HomeController {

  async index(req, res) {
    const model = new HomeModel()
    await model.getHome((err, results) => {
      if (err) {
        res.send(err)
      } else {
        res.json(results)
      }
    })
  }

  async saveForm(req, res) {
    console.log('chamou o backend')

    try {
      const { token } = req.body

      // Verificar o token do reCAPTCHA com o serviço reCAPTCHA
      const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
          secret: '6LdwfzUmAAAAAD5JkA-sQFwpwHEAjYA0arpzkXxq',
          response: token
        }
      })
      console.log(response.data)

      if (response.data.success) {
        const { formData } = req.body
        console.log('Batatinha', formData)
        const model = new HomeModel()
        const result = await model.saveForm(formData)
        console.log(result, 'RESULTADO')

        if (result) {
          return res.status(200).json({ message: 'Recaptcha seguro' });
        } else {
          return res.status(400).json({ error: 'Erro ao salvar no banco de dados' });
        }
      } else {
        return res.status(400).json({ error: 'Falha na verificação do reCAPTCHA' });
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

}

export default HomeController