"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerProxy = void 0;
var Server_1 = require("./Server");
var ServerProxy = /** @class */ (function (_super) {
    __extends(ServerProxy, _super);
    function ServerProxy() {
        var _this = _super.call(this) || this;
        _this.isAuthenticated = false;
        _this.connection = new Server_1.Server();
        return _this;
    }
    ServerProxy.prototype.addConnection = function (server) {
        this.connection = server;
        return this;
    };
    ServerProxy.prototype.authenticate = function (password) {
        // Um processo que acontece na cada intermediaria entre o servidor de fato e o client
        if (password === "secret") {
            this.isAuthenticated = true;
        }
        return this.isAuthenticated;
    };
    ServerProxy.prototype.handleRequestProxy = function (method, body) {
        var _a, _b, _c, _d, _e, _f;
        if (this.isAuthenticated) {
            if (method === "GET") {
                var resp = (_b = (_a = this.connection) === null || _a === void 0 ? void 0 : _a.database) === null || _b === void 0 ? void 0 : _b.getRecord(body.id);
                if (resp) {
                    return resp;
                }
                else {
                    return "Elemento n\u00E3o existe";
                }
            }
            if (body.value) {
                var resp = (_d = (_c = this.connection) === null || _c === void 0 ? void 0 : _c.database) === null || _d === void 0 ? void 0 : _d.setRecord(body.id, body.value);
                if (resp) {
                    return resp;
                }
            }
            return "".concat((_e = this.connection) === null || _e === void 0 ? void 0 : _e.host, ":").concat((_f = this.connection) === null || _f === void 0 ? void 0 : _f.host, ": Value no body \u00E9 necessario");
        }
        else {
            return "PROXY, Access denied: User not authenticated";
        }
    };
    return ServerProxy;
}(Server_1.Server));
exports.ServerProxy = ServerProxy;
