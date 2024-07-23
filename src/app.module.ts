import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/jwt.strategy";
import { AuthService } from './auth/auth.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: "your secret key",
      signOptions: {expiresIn: '1h'},
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "postgres",
      password: "Husan1214",
      database: 'postgres',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://khkhamidullo:UhOf3IXtEd0ebIy0@nest-mongo.zhf5htc.mongodb.net/?retryWrites=true&w=majority&appName=nest-mongo'),
    TodoModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController)
  }
}

