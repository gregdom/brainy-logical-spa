import { Router } from "express"
// import SiteController from "../controllers/SiteController.js"

const homeRouter = Router()
// const SiteControllerInit = new SiteController()

homeRouter.get("/", (req, res) => {
  res.json('Olá')
})

export default homeRouter