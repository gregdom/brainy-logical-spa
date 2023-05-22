import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import routes from "./routes/index.routes.js"

const port = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', function (req, res) {
  res.json({ message: 'Bem-vindo ao site da Brainy Logical' })
})

app.listen(port, () => {
  console.log(
    `Servidor rodando! Acesso: http://localhost:${port}`
  )
})