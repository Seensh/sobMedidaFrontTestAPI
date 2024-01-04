const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/exemplo', async (req, res) => {
    try {
        const apiUrl = 'http://44.208.32.243:8080/api/cliente/1';
        const response = await axios.get(apiUrl);
        const data = response.data;
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar na API:', error.message);
        res.status(500).json({ error: 'Erro ao buscar na API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
