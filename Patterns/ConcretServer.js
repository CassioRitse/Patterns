"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteServerBuilder = void 0;
var Server_1 = require("./Server");
var ConcreteServerBuilder = /** @class */ (function () {
    function ConcreteServerBuilder() {
        this.server = new Server_1.Server();
    }
    ConcreteServerBuilder.prototype.addConnection = function (server) {
        this.server = server;
        return this;
    };
    ConcreteServerBuilder.prototype.setDatabase = function (database) {
        this.server.database = database;
        return this;
    };
    ConcreteServerBuilder.prototype.setHost = function (host) {
        this.server.host = host;
        return this;
    };
    ConcreteServerBuilder.prototype.setPort = function (port) {
        this.server.port = port;
        return this;
    };
    ConcreteServerBuilder.prototype.setSecurity = function (security) {
        this.server.security = security;
        return this;
    };
    ConcreteServerBuilder.prototype.build = function () {
        return this.server;
    };
    ConcreteServerBuilder.prototype.reset = function () {
        this.server = new Server_1.Server();
    };
    return ConcreteServerBuilder;
}());
exports.ConcreteServerBuilder = ConcreteServerBuilder;
