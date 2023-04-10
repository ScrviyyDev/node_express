const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
    
    req.authStatus = false;
    if (req.authStatus) {
        console.log("Usuário está logado, pode prosseguir!");
        next();
    }
    else {
        console.log("Usuário não está logado, faça o login novamente!");
        next();
    }
}

app.use(checkAuth);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});