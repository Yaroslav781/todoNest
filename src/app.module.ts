import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { TodoModule } from './todo/todo/todo.module';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
