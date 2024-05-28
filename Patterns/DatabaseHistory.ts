import { Database } from "./Database";
import { DatabaseMemento } from "./DatabaseMemento";

export class DatabaseHistory {
  private mementos: DatabaseMemento[] = [];

  save(database: Database): void {
    this.mementos.push(database.createMemento());
  }

  undo(database: Database): void {
    if (this.mementos.length > 0) {
      const memento = this.mementos.pop();
      database.restore(memento!);
    }
  }

  public showHistory(): void {
    console.log("Historico de Dados:");
    for (const memento of this.mementos) {
      console.log(memento.getRecords());
    }
  }
}
