import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [JwtModule, AuthModule,
    PassportModule.register({defaultStrategy: "jwt"}),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[],
})
export class AuthModule {}
