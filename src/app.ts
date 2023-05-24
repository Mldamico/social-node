
import express, {Express} from 'express'
import {SocialMediaServer} from "./setupServer";

class Application {
  public start():void {
    const app:Express = express();
    const server:SocialMediaServer =new SocialMediaServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.start();