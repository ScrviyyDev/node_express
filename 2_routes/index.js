import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Olá mundo!!");
    res.end();
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})