import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
