import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import routes from "./routes/index.routes.js"

const port = process.env.PORT || 8081
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())
// app.use(express.static('dist'));
app.use(routes)

app.listen(port, () => {
  console.log(
    `Servidor rodando! Acesso: http://localhost:${port}`
  )
})