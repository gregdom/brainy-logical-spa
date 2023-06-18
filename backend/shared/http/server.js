import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import routes from "./routes/index.routes.js"

// import { fileURLToPath } from 'url'
// import path, { dirname } from 'path'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)


const port = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(cors())
// app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static('index.html'))
app.use(routes)

app.listen(port, () => {
  console.log(
    `Servidor rodando! Acesso: http://localhost:${port}`
  )
})