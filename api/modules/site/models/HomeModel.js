// import connection
import { query } from "../../../config/db/conn.js"

class HomeModel {
  async getHome(result) {
    const homeData = {}

    // Buscar informações da tabela "about"
    await query("SELECT * FROM about", (err, aboutResults) => {
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
            query("SELECT * FROM portfolio", (err, portfolioResults) => {
              if (err) {
                console.log(err)
                result(err, null)
              } else {
                homeData.portfolio = portfolioResults

                // Após buscar as informações da tabela "portfolio", retornar os resultados combinados
                result(null, homeData)
                console.log(homeData)
              }
            })
          }
        })
      }
    })
  }
}

export default HomeModel