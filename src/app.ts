
import express, {Express} from 'express'
import {SocialMediaServer} from "./setupServer";
import db from './setupDatabase';
import {config} from "./config";

class Application {
  public start():void {
    this.loadConfig();
    db();
    const app:Express = express();
    const server:SocialMediaServer =new SocialMediaServer(app);
    server.start();
  }

  private loadConfig(): void{
    config.validateConfig();

  }
}

const application: Application = new Application();
application.start();