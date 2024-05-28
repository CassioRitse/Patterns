import { ConcreteServerBuilder } from "./ConcretServer";
import { ConcreteServerProxyBuilder } from "./ConcretServerProxy";
import { Database } from "./Database";
import { DatabaseHistory } from "./DatabaseHistory";
import { Server } from "./Server";
import { ServerProxy } from "./ServerProxy";

function main() {
  //PADRÃO COMPORTAMENTAL
  const database = new Database("MongoDB");
  const history = new DatabaseHistory();

  // PADRÃO CRIACIONAL - Database sendo passado nesse contructor só para fins de encaixar melhor a logicas dos demais padroe
  const builder = new ConcreteServerBuilder();

  const builderProxy = new ConcreteServerProxyBuilder();

  // Meu Servidor mais ao extremo da aplicação
  const server = builder
    .setHost("localhost")
    .setPort(8080)
    .setSecurity("SSL")
    .setDatabase(database)
    .build();

  server.displayConfig();

  //PADRÃO ESTRUTURAL
  const serverProxy = builderProxy
    .setHost("localhost")
    .setPort(3030)
    .setSecurity("TCP")
    .addConnection(server)
    .build();

  serverProxy.displayConfig();

  console.log(serverProxy.handleRequestProxy("GET", { id: "1" })); // -> Access denied: User not authenticated

  // Login com o usuário valido
  const isAuthenticated = serverProxy.authenticate("secret");
  console.log(`Authenticated: ${isAuthenticated}`); // -> Authenticated: true

  // Clientes executando requisições
  console.log(serverProxy.handleRequestProxy("GET", { id: "1" })); // -> Elemento não existe
  // Clientes Salvando informações no banco de dados
  console.log(
    serverProxy.handleRequestProxy("POST", { id: "1", value: "Cássio Ritse" })
  );
  console.log(
    serverProxy.handleRequestProxy("POST", {
      id: "2",
      value: "Cicrano Da Silva",
    })
  );

  //Salvando o Memento(estado atual) do BancoDados
  history.save(database);
  // Mostrar o estado autal
  history.showHistory();

  // Simulando um erro de um Cliente (sobreescrevendo o ID: 2 do Banco de Dados)
  console.log(
    serverProxy.handleRequestProxy("POST", {
      id: "2",
      value: "Jubileu do Carmo",
    })
  );

  //Salvando o Memento(estado atual) do BancoDados
  history.save(database);
  history.showHistory(); // Deve mostrar dois dados armazenadas, sendo que o Jubileu sobreesceveu Sicrano

  history.undo(database); // Desfaz  a ultima operacao que foi a adicão do Jubileu do Carmo
  history.showHistory();

  console.log(serverProxy.handleRequestProxy("GET", { id: "2" })); // -> Cicrano Da Silva
}

main();
