"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcretServer_1 = require("./ConcretServer");
var ConcretServerProxy_1 = require("./ConcretServerProxy");
var Database_1 = require("./Database");
var DatabaseHistory_1 = require("./DatabaseHistory");
function main() {
    //PADRÃO COMPORTAMENTAL
    var database = new Database_1.Database("MongoDB");
    var history = new DatabaseHistory_1.DatabaseHistory();
    // PADRÃO CRIACIONAL - Database sendo passado nesse contructor só para fins de encaixar melhor a logicas dos demais padroe
    var builder = new ConcretServer_1.ConcreteServerBuilder();
    var builderProxy = new ConcretServerProxy_1.ConcreteServerProxyBuilder();
    // Meu Servidor mais ao extremo da aplicação
    var server = builder
        .setHost("localhost")
        .setPort(8080)
        .setSecurity("SSL")
        .setDatabase(database)
        .build();
    server.displayConfig();
    //PADRÃO ESTRUTURAL
    var serverProxy = builderProxy
        .setHost("localhost")
        .setPort(3030)
        .setSecurity("TCP")
        .addConnection(server)
        .build();
    serverProxy.displayConfig();
    console.log(serverProxy.handleRequestProxy("GET", { id: "1" })); // -> Access denied: User not authenticated
    // Login com o usuário valido
    var isAuthenticated = serverProxy.authenticate("secret");
    console.log("Authenticated: ".concat(isAuthenticated)); // -> Authenticated: true
    // Clientes executando requisições
    console.log(serverProxy.handleRequestProxy("GET", { id: "1" })); // -> Elemento não existe
    // Clientes Salvando informações no banco de dados
    console.log(serverProxy.handleRequestProxy("POST", { id: "1", value: "Cássio Ritse" }));
    console.log(serverProxy.handleRequestProxy("POST", {
        id: "2",
        value: "Cicrano Da Silva",
    }));
    //Salvando o Memento(estado atual) do BancoDados
    history.save(database);
    // Mostrar o estado autal
    history.showHistory();
    // Simulando um erro de um Cliente (sobreescrevendo o ID: 2 do Banco de Dados)
    console.log(serverProxy.handleRequestProxy("POST", {
        id: "2",
        value: "Jubileu do Carmo",
    }));
    //Salvando o Memento(estado atual) do BancoDados
    history.save(database);
    history.showHistory(); // Deve mostrar dois dados armazenadas, sendo que o Jubileu sobreesceveu Sicrano
    history.undo(database); // Desfaz  a ultima operacao que foi a adicão do Jubileu do Carmo
    history.showHistory();
    console.log(serverProxy.handleRequestProxy("GET", { id: "2" })); // -> Cicrano Da Silva
}
main();
