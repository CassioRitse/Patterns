"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteServerProxyBuilder = void 0;
var ServerProxy_1 = require("./ServerProxy");
var ConcreteServerProxyBuilder = /** @class */ (function () {
    function ConcreteServerProxyBuilder() {
        this.serverProxy = new ServerProxy_1.ServerProxy();
    }
    ConcreteServerProxyBuilder.prototype.build = function () {
        return this.serverProxy;
    };
    ConcreteServerProxyBuilder.prototype.addConnection = function (server) {
        this.serverProxy.connection = server;
        return this;
    };
    ConcreteServerProxyBuilder.prototype.setDatabase = function (database) {
        this.serverProxy.connection.database = database;
        return this;
    };
    ConcreteServerProxyBuilder.prototype.setHost = function (host) {
        this.serverProxy.host = host;
        return this;
    };
    ConcreteServerProxyBuilder.prototype.setPort = function (port) {
        this.serverProxy.port = port;
        return this;
    };
    ConcreteServerProxyBuilder.prototype.setSecurity = function (security) {
        this.serverProxy.security = security;
        return this;
    };
    ConcreteServerProxyBuilder.prototype.reset = function () {
        this.serverProxy = new ServerProxy_1.ServerProxy();
    };
    return ConcreteServerProxyBuilder;
}());
exports.ConcreteServerProxyBuilder = ConcreteServerProxyBuilder;
