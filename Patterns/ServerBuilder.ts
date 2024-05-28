import { Database } from "./Database";
import { Server } from "./Server";

export interface ServerBuilder {
  addConnection(server: Server): this;
  reset(): void;
  setHost(host: string): this;
  setPort(port: number): this;
  setSecurity(security: string): this;
  setDatabase(database: Database): this;
  build(): Server;
}
