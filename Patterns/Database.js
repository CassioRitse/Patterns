"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var DatabaseMemento_1 = require("./DatabaseMemento");
var Database = /** @class */ (function () {
    function Database(name) {
        this.name = name;
        this.records = new Map();
    }
    Database.prototype.setRecord = function (key, value) {
        this.records.set(key, value);
        return "".concat(this.name, ": Dados [").concat(key, ": ").concat(value, "] salvo com sucesso!");
    };
    Database.prototype.getRecord = function (key) {
        return this.records.get(key);
    };
    // Cria um memento do estado atual do banco de dados
    Database.prototype.createMemento = function () {
        return new DatabaseMemento_1.DatabaseMemento(new Map(this.records));
    };
    Database.prototype.restore = function (memento) {
        this.records = memento.getRecords();
    };
    return Database;
}());
exports.Database = Database;
