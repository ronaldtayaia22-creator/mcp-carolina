const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('✅ MCP Carolina activo y escuchando.');
});

app.post('/webhook', (req, res) => {
  // Aquí va tu lógica para manejar peticiones del webhook
  // Por ejemplo, procesar datos que reciba ElevenLabs

  // Para probar, solo respondemos con 200 OK:
  res.status(200).send('Webhook recibido');
});

app.listen(port, () => {
  console.log(`Servidor MCP escuchando en el puerto ${port}`);
});
