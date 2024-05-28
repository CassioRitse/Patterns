import { Database } from "./Database";

// Interface para Server, tanto para Server e Proxy-Server
export interface ServerInterface {
  handleRequest(
    method: "GET" | "POST",
    body: { id: string; value?: string }
  ): string | null;
}

export class Server implements ServerInterface {
  host;
  port;
  security;
  database: Database | null;

  //Database obrigatorio só para encaixar outros padroes
  constructor() {
    this.host = "";
    this.port = 0;
    this.security = "";
    this.database = null;
  }

  handleRequest(request: string): string {
    return `Handling request: ${request}`;
  }

  displayConfig() {
    console.log(`Host: ${this.host}`);
    console.log(`Port: ${this.port}`);
    console.log(`Security: ${this.security}`);
    console.log(`Database: ${this.database}`);
  }
}
