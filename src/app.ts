import express, { Express } from 'express';
import { SocialMediaServer } from '@root//setupServer';
import db from '@root/setupDatabase';
import { config } from '@root//config';

class Application {
  public start(): void {
    this.loadConfig();
    db();
    const app: Express = express();
    const server: SocialMediaServer = new SocialMediaServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.start();
