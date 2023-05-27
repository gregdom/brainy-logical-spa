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

                      // Buscar informações da tabela "portfolio"
                      query(
                        `SELECT portfolio.title, portfolio.description, image_portfolio.path FROM portfolio
                JOIN image_portfolio ON portfolio.id = image_portfolio.fk_portfolio_id`, (err, portfolioResults) => {
                        if (err) {
                          console.log(err)
                          result(err, null)
                        } else {
                          homeData.portfolio = portfolioResults

                          // Buscar informações da tabela "categories"
                          query(
                            `SELECT * FROM categories`, (err, categoriesResults) => {
                              if (err) {
                                console.log(err)
                                result(err, null)
                              } else {
                                homeData.categories = categoriesResults

                                result(null, homeData)
                                // console.log(homeData)
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

  async saveForm(formData) {
    const sql_query = 'INSERT INTO brainylogicaldb.visitors (id, name, lastname, email, business, website, descriptionProject, created_at, fk_visitor_status_id, fk_category_id) VALUES (NULL, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)';

    const values = [
      formData.firstName,
      formData.lastName !== '' ? formData.lastName : null,
      formData.email,
      formData.companyName !== '' ? formData.companyName : null,
      formData.companySite !== '' ? formData.companySite : null,
      formData.projectDetails,
      '1',
      formData.projectType
    ];

    console.log('----------')
    console.log(values)
    console.log('----------')

    try {
      const insert = await query(sql_query, values);
      console.log(insert, 'INSERT');
      return insert;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

export default HomeModel
