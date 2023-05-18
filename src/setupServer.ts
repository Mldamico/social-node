import {
  Application,
  json,
  urlencoded,
  Response,
  Request,
  NextFunction,
} from "express";
import http from "http";

export class ChattyServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalHandler(this.app);
  }
  private securityMiddleware(app: Application): void {}
  private standardMiddleware(app: Application): void {}
  private routeMiddleware(app: Application): void {}
  private globalHandler(app: Application): void {}

  private startServer(app: Application) {}

  private createSocketIO(httpServer: http.Server) {}
}
