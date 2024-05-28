"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMemento = void 0;
var DatabaseMemento = /** @class */ (function () {
    function DatabaseMemento(records) {
        this.records = new Map(records);
    }
    DatabaseMemento.prototype.getRecords = function () {
        return new Map(this.records);
    };
    return DatabaseMemento;
}());
exports.DatabaseMemento = DatabaseMemento;
