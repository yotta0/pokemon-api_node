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

    // ENDPOINTS
    consign({cwd: 'backend'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}