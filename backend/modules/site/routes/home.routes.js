import { Router } from "express"
import HomeController from "../controllers/HomeController.js"

const homeRouter = Router()
const HomeControllerInit = new HomeController()

homeRouter.get("/", HomeControllerInit.index)

homeRouter.post("/contact-projects", HomeControllerInit.saveForm)

export default homeRouter
