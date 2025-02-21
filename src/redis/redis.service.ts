import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client!: Redis;

  onModuleInit() {
    this.client = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: Number(process.env.REDIS_PORT) || 6379,
    });
  }

  onModuleDestroy() {
    this.client.quit();
  }

  async publish(channel: string, message: string): Promise<number> {
    return this.client.publish(channel, message);
  }

  async subscribe(channel: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.client.subscribe(channel, (err, count) => {
        if (err) {
          return reject(err);
        }
        resolve(count as number);
      });
    });
  }

  async unsubscribe(channel: string): Promise<number> {
    return this.client.unsubscribe(channel) as unknown as number;
  }

  async getClient(): Promise<Redis> {
    return this.client;
  }
}