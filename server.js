import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchGalleryData } from './src/fetch-messages.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos fazendo com que qualquer arquivo na pasta public seja acessada diretamente pelo nav.
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public'))); 

// Criando rota para retornar dados da galeria
app.get('/api/gallery', async (req, res) => {
    try {
        const galleryData = await fetchGalleryData();
        res.json(galleryData);
    } catch (error) {
        console.error('Erro ao buscar dados da galeria:', error);
        res.status(500).json({ error: 'Erro ao buscar dados da galeria' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
