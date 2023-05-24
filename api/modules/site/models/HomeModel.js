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
        console.log(err)
        result(err, null)
      } else {
        homeData.about = aboutResults

        // Buscar informações da tabela "services"
        query("SELECT * FROM services", (err, servicesResults) => {
          if (err) {
            console.log(err)
            result(err, null)
          } else {
            homeData.services = servicesResults

            // Buscar informações da tabela "portfolio"
            query(
              `SELECT portfolio.title, portfolio.description, image_portfolio.path FROM portfolio
                JOIN image_portfolio ON portfolio.id = image_portfolio.fk_portfolio_id`, (err, portfolioResults) => {
              if (err) {
                console.log(err)
                result(err, null)
              } else {
                homeData.portfolio = portfolioResults

                // Buscar informações da tabela "testimonials"
                query(
                  `SELECT testimonials.title, testimonials.description, testimonials.name, testimonials.image_path FROM testimonials`, (err, testimonialsResults) => {
                    if (err) {
                      console.log(err)
                      result(err, null)
                    } else {
                      homeData.testimonials = testimonialsResults

                      // Após buscar as informações da tabela "portfolio", retornar os resultados combinados
                      result(null, homeData)
                      // console.log(homeData)
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
}

export default HomeModel
