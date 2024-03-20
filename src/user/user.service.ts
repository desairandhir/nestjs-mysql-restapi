import { Injectable } from '@nestjs/common';
import { User } from './user.entity';



@Injectable()
export class UserService {
    public users: User[] = [
        {
            username: 'a',
            password: 'admin',
            email: 'a@gmail.com',
            age: 21,
        },
        {
            username: 'b',
            password: 'admin',
            email: 'b@gmail.com',
            age: 22,
        },
    ];

    getUserByUserName(userName: string): User {
        return this.users.find((user) => user.username == userName);
    }
}