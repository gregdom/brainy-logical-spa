// import connection
import { query } from "../../../config/db/conn.js"

class HomeModel {
  async getHome(result) {
    const homeData = {}

    // Buscar informações da tabela "about"
    await query(
      `SELECT about.description, image_about.path FROM about
      JOIN image_about ON about.id = image_about.fk_about_id`, (err, aboutResults) => {
      if (err) {
        result(err, null)
      } else {
        homeData.about = aboutResults

        // Buscar informações da tabela "services"
        query("SELECT * FROM services", (err, servicesResults) => {
          if (err) {
            result(err, null)
          } else {
            homeData.services = servicesResults

            // Buscar informações da tabela "portfolio"
            query(
              `SELECT portfolio.title, portfolio.description, image_portfolio.path FROM portfolio
                JOIN image_portfolio ON portfolio.id = image_portfolio.fk_portfolio_id`, (err, portfolioResults) => {
              if (err) {
                result(err, null)
              } else {
                homeData.portfolio = portfolioResults

                // Buscar informações da tabela "testimonials"
                query(
                  `SELECT testimonials.title, testimonials.description, testimonials.name, testimonials.image_path FROM testimonials`, (err, testimonialsResults) => {
                    if (err) {
                      result(err, null)
                    } else {
                      homeData.testimonials = testimonialsResults

                      // Buscar informações da tabela "portfolio"
                      query(
                        `SELECT portfolio.title, portfolio.description, image_portfolio.path FROM portfolio
                JOIN image_portfolio ON portfolio.id = image_portfolio.fk_portfolio_id`, (err, portfolioResults) => {
                        if (err) {
                          result(err, null)
                        } else {
                          homeData.portfolio = portfolioResults

                          // Buscar informações da tabela "categories"
                          query(
                            `SELECT * FROM categories`, (err, categoriesResults) => {
                              if (err) {
                                result(err, null)
                              } else {
                                homeData.categories = categoriesResults
                                result(null, homeData)
                              }
                            }
                          )

                        }
                      }
                      )
                    }
                  }
                )

              }
            }
            )

          }
        })
      }
    }
    )
  }

  async saveFormSQL(formData) {
    const sql_query = 'INSERT INTO brainylogicaldb.visitors (id, name, lastname, email, business, website, descriptionProject, addressIP, created_at, fk_visitor_status_id, fk_category_id) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)'

    const values = [
      formData.firstName,
      formData.lastName !== '' ? formData.lastName : null,
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
    const sql_query = `SELECT created_at FROM brainylogicaldb.visitors WHERE addressIP = ? ORDER BY created_at DESC LIMIT 1`

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
