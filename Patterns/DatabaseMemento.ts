export class DatabaseMemento {
  private records: Map<string, string>;

  constructor(records: Map<string, string>) {
    this.records = new Map(records);
  }

  getRecords(): Map<string, string> {
    return new Map(this.records);
  }
}
