import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoService.getTodos();
  }

  @Post()
  async createTodo(@Body() createTodo: TodoEntity): Promise<TodoEntity> {
    return this.todoService.createTodo(createTodo);
  }

  @Put(':id')
  async updateTodo(
    @Body() updateTodo: TodoEntity,
    @Param('id') id,
  ): Promise<UpdateResult> {
    return this.todoService.updateTodo(updateTodo, id);
  }
  @Delete(':id')
  async deleteTodo(@Param('id') id): Promise<DeleteResult> {
    return this.todoService.deleteTodo(id);
  }
}
