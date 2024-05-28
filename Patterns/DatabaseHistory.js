"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseHistory = void 0;
var DatabaseHistory = /** @class */ (function () {
    function DatabaseHistory() {
        this.mementos = [];
    }
    DatabaseHistory.prototype.save = function (database) {
        this.mementos.push(database.createMemento());
    };
    DatabaseHistory.prototype.undo = function (database) {
        if (this.mementos.length > 0) {
            var memento = this.mementos.pop();
            database.restore(memento);
        }
    };
    DatabaseHistory.prototype.showHistory = function () {
        console.log("Historico de Dados:");
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getRecords());
        }
    };
    return DatabaseHistory;
}());
exports.DatabaseHistory = DatabaseHistory;
