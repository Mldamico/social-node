import dotenv from 'dotenv';
import * as process from "process";
import bunyan, {LogLevel} from 'bunyan'

dotenv.config({})

class Config {
  public DATABASE_URL: string | undefined
  public JWT_TOKEN : string | undefined
  public NODE_ENV : string | undefined
  public SECRET_KEY_ONE : string | undefined
  public SECRET_KEY_TWO : string | undefined
  public CLIENT_URL : string | undefined
  public REDIS_HOST: string | undefined


  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || 'asdasdmkasf';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.REDIS_HOST = process.env.REDIS_HOST || ""
  }

  public validateConfig() {
    for(const [key,value] of Object.entries(this)){
      if(value === undefined){
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }

  public createLogger(name: string, level:LogLevel ="debug") {
    return bunyan.createLogger({name, level})
  }
}

export const config: Config = new Config();
