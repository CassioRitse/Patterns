"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var Server = /** @class */ (function () {
    //Database obrigatorio só para encaixar outros padroes
    function Server() {
        this.host = "";
        this.port = 0;
        this.security = "";
        this.database = null;
    }
    Server.prototype.handleRequest = function (request) {
        return "Handling request: ".concat(request);
    };
    Server.prototype.displayConfig = function () {
        console.log("Host: ".concat(this.host));
        console.log("Port: ".concat(this.port));
        console.log("Security: ".concat(this.security));
        console.log("Database: ".concat(this.database));
    };
    return Server;
}());
exports.Server = Server;
