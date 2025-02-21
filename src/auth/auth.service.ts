import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { JwtPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userData: Partial<User>): Promise<User> {
    const user: User = { ...userData, id: '0' } as User;
    return this.usersService.create(user);
  }

  async login(username: string, password: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.findByCredentials(username, password);
    const payload: JwtPayload = { username: user.username, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByCredentials(username, password);
    return user ? user : null;
  }
}