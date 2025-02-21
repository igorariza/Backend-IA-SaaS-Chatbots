import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationRepository } from './conversation.repository';
import { Conversation } from './conversation.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ConversationRepository)
    private readonly conversationRepository: ConversationRepository,
  ) {}

  async sendMessage(userId: string, messageDto: { message: string }) {
    const conversation = new Conversation();
    conversation.userId = userId;
    conversation.message = messageDto.message;
    conversation.timestamp = new Date();

    return this.conversationRepository.save(conversation);
  }

  async getConversations(userId: string) {
    return this.conversationRepository.find({ where: { userId } });
  }

  async processMessage(userId: string, message: string) {
    const response = `Processed message: ${message}`;
    return response;
  }
}