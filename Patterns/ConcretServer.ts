import { Database } from "./Database";
import { Server } from "./Server";
import { ServerBuilder } from "./ServerBuilder";

export class ConcreteServerBuilder implements ServerBuilder {
  private server: Server;

  constructor() {
    this.server = new Server();
  }

  addConnection(server: Server): this {
    this.server = server;
    return this;
  }

  setDatabase(database: Database): this {
    this.server.database = database;
    return this;
  }

  setHost(host: string): this {
    this.server.host = host;
    return this;
  }

  setPort(port: number): this {
    this.server.port = port;
    return this;
  }

  setSecurity(security: string): this {
    this.server.security = security;
    return this;
  }

  build(): Server {
    return this.server;
  }

  reset() {
    this.server = new Server();
  }
}
