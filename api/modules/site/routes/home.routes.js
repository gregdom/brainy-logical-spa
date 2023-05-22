import { Router } from "express"
import HomeController from "../controllers/HomeController.js";

const homeRouter = Router();
const HomeControllerInit = new HomeController();

homeRouter.get("/", HomeControllerInit.index);

export default homeRouter;