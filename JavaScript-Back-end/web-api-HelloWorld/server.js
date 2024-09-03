const express = require('express');
const app = express();

// Rota para a página raiz que responde com "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Inicializar o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
