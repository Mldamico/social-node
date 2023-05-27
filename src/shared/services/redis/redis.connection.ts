import Logger from 'bunyan';
import { config } from '@root/config';
import { BaseCache } from '@service/redis/base.cache';

const log: Logger = config.createLogger('redisConnection');

class RedisConnection extends BaseCache {
  constructor() {
    super('redisConnection');
  }

  async connect() {
    try {
      await this.client.connect();
    } catch (e) {
      log.error(e);
    }
  }
}


export const redisConnection = new RedisConnection();
