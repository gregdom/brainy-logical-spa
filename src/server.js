import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Obter o diretório atual do arquivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar o middleware para servir os arquivos estáticos do Vue
// Altere a linha que configura o middleware para servir os arquivos estáticos
app.use(express.static(join(__dirname, '..', 'dist')));

// Altere a linha que configura a rota para servir a página inicial do Vue
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'dist', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando http://localhost/${port}`);
});
