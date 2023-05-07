const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');

module.exports = () => {
    const app = express();

    // setando variáveis da aplicação
    app.set('port', process.env.PORT || config.get('server.port'));

    // middleware
    app.use(bodyParser.json());

    // middleware para servir os arquivos estáticos
    app.use(express.static('frontend/public'));

    // Rota para a página inicial
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
    });

    // ENDPOINTS
    consign({cwd: 'backend'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}