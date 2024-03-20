import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { UsersModule } from 'src/user/user.module';
import { LocalStrategy } from './local.strategy';
import { AuthService } from './auth.service';
import { jwtConstants } from './auth.constants';

@Module({
  imports: [PassportModule, UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [],
  providers: [LocalStrategy,AuthService],
  exports: [AuthService],
})
export class AuthModule { }