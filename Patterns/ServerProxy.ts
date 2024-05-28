
import { Server } from "./Server";


export class ServerProxy extends Server {
  isAuthenticated: boolean;
  connection: Server;

  constructor() {
   super()
    this.isAuthenticated = false;
    this.connection = new Server();
  }

  addConnection(server: Server): this {
    this.connection = server;
    return this;
  }

  authenticate(password: string): boolean {
    // Um processo que acontece na cada intermediaria entre o servidor de fato e o client
    if (password === "secret") {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  handleRequestProxy(
    method: "GET" | "POST",
    body: { id: string; value?: string }
  ): string | null {
    if (this.isAuthenticated) {
      if (method === "GET") {
        const resp = this.connection?.database?.getRecord(body.id);
        if (resp) {
          return resp;
        } else {
          return `Elemento não existe`;
        }
      }

      if (body.value) {
        const resp = this.connection?.database?.setRecord(body.id, body.value);
        if(resp){
          return resp
        }
      }

      return `${this.connection?.host}:${
        this.connection?.host
      }: Value no body é necessario`;
    } else {
      return "PROXY, Access denied: User not authenticated";
    }
  }
}
