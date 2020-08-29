require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`API rodando na porta ${process.env.PORT || 3000}`);
});

app.listen(process.env.PORT || 3000);