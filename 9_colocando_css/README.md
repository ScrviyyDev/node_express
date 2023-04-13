# Colocando CSS

- Para inserir CSS nas páginas e arquivos estáticos, vamos precisar de um middleware chamado `express.static`.
- Precisamos colocar um diretório base, que normalmente é o public.
- E criar os estáticos a partir desta pasta.
- Por fim, no HTML podemos acessar o caminho relativo após a pasta definida.

---

# Criando uma página 404

- Para criar uma página 404, ou seja, para quando o usuário acessar uma URL que não existe.
- Basta criar um novo middleware abaixo de todas as rotas, que responde com este status.
- E por fim, enviar um arquivo referente a está página.