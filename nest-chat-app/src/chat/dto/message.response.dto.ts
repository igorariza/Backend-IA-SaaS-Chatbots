import { IsNotEmpty, IsString } from 'class-validator';

export class MessageResponseDto {
  @IsNotEmpty()
  @IsString()
  message!: string;

  @IsNotEmpty()
  @IsString()
  response!: string;
}