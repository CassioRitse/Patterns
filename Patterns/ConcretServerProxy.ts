import { Database } from "./Database";
import { Server } from "./Server";
import { ServerBuilder } from "./ServerBuilder";
import { ServerProxy } from "./ServerProxy";

export class ConcreteServerProxyBuilder implements ServerBuilder {
  private serverProxy: ServerProxy;

  constructor() {
    this.serverProxy = new ServerProxy();
  }

  build(): ServerProxy {
    return this.serverProxy;
  }

  addConnection(server: Server): this {
    this.serverProxy.connection = server;
    return this;
  }

  setDatabase(database: Database): this {
    this.serverProxy.connection.database = database;
    return this;
  }

  setHost(host: string): this {
    this.serverProxy.host = host;
    return this;
  }

  setPort(port: number): this {
    this.serverProxy.port = port;
    return this;
  }

  setSecurity(security: string): this {
    this.serverProxy.security = security;
    return this;
  }

  reset() {
    this.serverProxy = new ServerProxy();
  }
}
