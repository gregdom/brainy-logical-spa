import HomeModel from "../models/HomeModel.js"

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

}

export default HomeController