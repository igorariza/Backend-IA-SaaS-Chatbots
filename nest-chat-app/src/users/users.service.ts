import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [];

    create(createUserDto: CreateUserDto): User {
        const user = new User();
        user.username = createUserDto.username;
        user.password = createUserDto.password;
        user.email = createUserDto.email;
        user.role = createUserDto.role;
        user.conversations = [];
        this.users.push(user);
        return user;
    }

    findAll(): User[] {
        return this.users;
    }

    findById(id: string): User | null {
        return this.users.find(user => user.id === id) || null;
    }

    update(id: string, updatedUser: User): User | null {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex > -1) {
            this.users[userIndex] = updatedUser;
            return updatedUser;
        }
        return null;
    }

    delete(id: string): boolean {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex > -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }

    findByCredentials(username: string, password: string): User {
        const user = this.users.find(user => user.username === username && user.password === password);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}