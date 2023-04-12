# Enviando dados por POST

- Para enviar dados, iremos precisar _criar um form e mandar os dados via POST para alguma URL_.
- No Express precisamos colocar alguns **middlewares** como o **express.json** para ler os dados do body.
- E também uma rota que vai receber estes dados, utilizando o método `post()` do Express.