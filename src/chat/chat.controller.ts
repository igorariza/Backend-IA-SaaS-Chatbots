import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ChatService } from './chat.service';
import { Request } from 'express';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('message')
  //@UseGuards(AuthGuard('jwt'))
  async sendMessage(@Body() messageDto: { message: string }, @Req() request: Request) {
    const userId = request.user as { id: string };
    return this.chatService.sendMessage(userId.id, { message: messageDto.message });
  }

  @Get('conversations')
  //@UseGuards(AuthGuard('jwt'))
  async getConversations(@Req() request: Request) {
    const userId = request.user as { id: string };
    return this.chatService.getConversations(userId.id);
  }
}