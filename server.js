const app = require('./config/express')();

const port = app.get('port');

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
