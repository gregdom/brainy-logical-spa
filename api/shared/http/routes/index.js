import { Router } from "express";
import siteRouter from "../../../modules/site/routes/site.routes.js";

const routes = Router();

routes.use("/", siteRouter);

// routes.use((req, res, next) => {
//   res.render("./general/404notFound.ejs")
// });

export default routes;