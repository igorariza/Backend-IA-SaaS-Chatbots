import { Injectable } from '@nestjs/common';
import { Channel, Connection, connect } from 'amqplib';

@Injectable()
export class RabbitMQService {
  private connection!: Connection;
  private channel!: Channel;

  constructor() {
    this.initialize();
  }

  private async initialize() {
    this.connection = await connect('amqp://guest:guest@localhost:5672')
    this.channel = await this.connection.createChannel();
  }

  async sendToQueue(queue: string, message: any) {
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });
  }

  async consumeFromQueue(queue: string, callback: (msg: any) => void) {
    await this.channel.assertQueue(queue, { durable: true });
    this.channel.consume(queue, (msg) => {
      if (msg) {
        callback(JSON.parse(msg.content.toString()));
        this.channel.ack(msg);
      }
    });
  }

  async closeConnection() {
    await this.channel.close();
    await this.connection.close();
  }

  async sendMessage(message: any) {
    await this.sendToQueue('chat', message);
    return { message: 'Message sent' };
  }
}