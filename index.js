const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ MCP Carolina activo y escuchando.');
});

app.post('/webhook', (req, res) => {
  console.log('📥 Webhook recibido:', req.body);
  res.json({ status: 'recibido', body: req.body });
});

app.listen(port, () => {
  console.log(`🚀 Servidor MCP escuchando en el puerto ${port}`);
});