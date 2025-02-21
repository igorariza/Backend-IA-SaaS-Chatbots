import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private configService: NestConfigService) {}

  get(key: string): string {
    return this.configService.get<string>(key) || '';
  }

  getPort(): number {
    return this.configService.get<number>('PORT') || 3000;
  }

  getDatabaseUrl(): string {
    return this.configService.get<string>('DATABASE_URL') || '';
  }

  getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET') || '';
  }

  getRedisUrl(): string {
    return this.configService.get<string>('REDIS_URL') || '';
  }

  getRabbitMqUrl(): string {
    return this.configService.get<string>('RABBITMQ_URL') || '';
  }
}