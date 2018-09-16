# node-express-mongodb

Configurando ambiente:

  instalar node
  instalar mongodb
  configurar variável de ambiente do mongo db

rodar o projeto:
  
  entrar dentro da pasta do projeto
  executar: npm install
  executar mongo: mongod --dpath <caminho da pasta que você quer deixar as suas collections, normalmente utilizamos /data/db>
  verificar se subiu mongo e console do mongo: mongodb://127.0.0.1:27017
  executar aplicação: node app.js
  adicionar usuário para logar na aplicação: db.usuarios.insert({'nome':'admin','senha':'admin'})
