import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import type { Todo } from './todo.interface';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todoService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() body: { title: string; description: string }): Todo {
    return this.todoService.createTodo(body.title, body.description);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; completed?: boolean },
  ): Todo {
    return this.todoService.updateTodo(
      Number(id),
      body.title,
      body.description,
      body.completed,
    );
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): { message: string } {
    return this.todoService.deleteTodo(Number(id));
  }
}

