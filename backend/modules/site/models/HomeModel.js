// import connection
import { query } from "../../../config/db/conn.js"

class HomeModel {
  async getHome() {
    const dataHome = {}

    // Buscar informações da tabela "about"
    const aboutResults = await query(`
    SELECT about.description, image_about.path
    FROM about
    JOIN image_about ON about.id = image_about.fk_about_id
  `)
    dataHome.about = aboutResults

    // Buscar informações da tabela "services"
    const servicesResults = await query("SELECT * FROM services")
    dataHome.services = servicesResults

    // Buscar informações da tabela "portfolio"
    const portfolioResults = await query(`
    SELECT portfolio.title, portfolio.link, portfolio.description, image_portfolio.path
    FROM portfolio
    JOIN image_portfolio ON portfolio.id = image_portfolio.fk_portfolio_id
  `)
    dataHome.portfolio = portfolioResults

    // Buscar informações da tabela "testimonials"
    const testimonialsResults = await query(`
    SELECT testimonials.name, testimonials.work, testimonials.highlight, testimonials.description, testimonials.path
    FROM testimonials
  `)
    dataHome.testimonials = testimonialsResults

    // Buscar informações da tabela "categories"
    const categoriesResults = await query("SELECT * FROM categories")
    dataHome.categories = categoriesResults

    // Retornar os dados apenas se todos os arrays estiverem preenchidos
    if (
      Object.values(dataHome).some((value) => Array.isArray(value) && value.length === 0)
    ) {
      throw new Error('Um ou mais arrays de resultados estão vazios');
    }

    return dataHome;
  }

  async saveFormSQL(formData) {
    const sql_query = 'INSERT INTO ttahvh_brainydb.visitors (id, name, email, business, website, descriptionProject, addressIP, created_at, fk_visitor_status_id, fk_category_id) VALUES (NULL, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)'

    const values = [
      formData.firstName,
      formData.email,
      formData.companyName !== '' ? formData.companyName : null,
      formData.companySite !== '' ? formData.companySite : null,
      formData.projectDetails,
      formData.userIP,
      '1',
      formData.projectType
    ]

    try {
      await query(sql_query, values)
      return true
    } catch (error) {
      return false
    }
  }

  async findIP(addressIP) {
    const sql_query = `SELECT created_at FROM ttahvh_brainydb.visitors WHERE addressIP = ? ORDER BY created_at DESC LIMIT 1`

    try {
      const result = await query(sql_query, [addressIP])

      if (result.length > 0) {
        const lastAccessTime = result[0].created_at
        const currentTime = new Date()

        const diffInMinutes = Math.floor((currentTime - lastAccessTime) / (1000 * 60))

        if (diffInMinutes >= 30) {
          return 200 // Se passaram 30 minutos, retorna 'tudo certo'
        } else {
          return 400 // Caso contrário, retorna 'não pode continuar'
        }
      } else {
        return 200 // Se não encontrou nenhum acesso anterior, retorna 'tudo certo'
      }
    } catch (error) {
      return 400 // Em caso de erro, retorne 'erro' ou trate-o de acordo com suas necessidades
    }
  }

}

export default HomeModel
