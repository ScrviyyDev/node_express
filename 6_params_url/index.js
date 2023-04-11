const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {

    // leitura da tabela users, resgatar um usuário do banco
    const id = req.params.id;
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})