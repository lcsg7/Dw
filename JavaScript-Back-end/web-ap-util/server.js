const express = require('express');
const app = express();
const textRoutes = require('./routes/text');
const numberRoutes = require('./routes/number');

app.use(express.json());

app.use('/text', textRoutes);
app.use('/number', numberRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
