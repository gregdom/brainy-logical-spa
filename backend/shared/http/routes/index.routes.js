import { Router } from "express"
import homeRouter from "../../../modules/site/routes/home.routes.js"
const routes = Router()

routes.use("/api", homeRouter)

export default routes