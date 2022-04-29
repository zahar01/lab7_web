import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Interceptor } from './interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-30-67-143.eu-west-1.compute.amazonaws.com',
      port: 5432,
      username: 'rjkeodderxszol',
      password: '048274445a91d812f5ea1b8aba312f6f10f3f5d6c4f4d563c6c2d013f6746ede',
      database: 'd74qjtmv65e4jk',
      entities: ['dist/**/entities/*.entities{.ts,.js}'],
      synchronize: true,
      ssl: { rejectUnauthorized: false }
    }),
    ItemsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: Interceptor }],
})
export class AppModule {}
