import { DatabaseMemento } from "./DatabaseMemento";

export class Database {
  private name: string;
  private records: Map<string, string>;

  constructor(name: string) {
    this.name = name;
    this.records = new Map();
  }

  setRecord(key: string, value: string): string {
    this.records.set(key, value);

    return `${this.name}: Dados [${key}: ${value}] salvo com sucesso!`;
  }

  getRecord(key: string): string | undefined {
    return this.records.get(key);
  }

  // Cria um memento do estado atual do banco de dados
  createMemento(): DatabaseMemento {
    return new DatabaseMemento(new Map(this.records));
  }

  restore(memento: DatabaseMemento): void {
    this.records = memento.getRecords();
  }
}
