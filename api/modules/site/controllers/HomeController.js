import HomeService from "../services/HomeService.js";

class HomeController {

  async index(req, res) {
    const service = new HomeService();
    const result = await service.index();

    return res.render("./home/pages/index.ejs", { data: result });
  }

}

export default HomeController;