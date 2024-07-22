import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule, ConfigService} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }) ,UsersModule, ServicesModule, OrdersModule,
  TypeOrmModule.forRootAsync({
    imports:[ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get("DATABASE_HOST"),
      port: configService.get("DATABSE_PORT"),
      username: configService.get("DATABSE_USERNAME"),
      password: configService.get("DATABASE_PASSWORD"),
      database: configService.get("DATABSE_NAME"),
      entities: [User],
      synchronize: true,
    }),
    inject: [ConfigService],
  })  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
