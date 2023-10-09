import { Body, Injectable, Param } from '@nestjs/common';
import { todos } from 'src/todos-mock';
import { TodoEntity } from './todo.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

//let todosData = todos;

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async createTodo(@Body() createTodo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.save(createTodo);
  }

  async updateTodo(
    @Body() updateTodo: TodoEntity,
    @Param('id') id,
  ): Promise<UpdateResult> {
    //todosData = todosData.map((todo) => (todo.id === id ? updateTodo : todo));
    const todo = this.todoRepository.update(id, updateTodo);

    return await todo;
  }

  async deleteTodo(@Param('id') id): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
