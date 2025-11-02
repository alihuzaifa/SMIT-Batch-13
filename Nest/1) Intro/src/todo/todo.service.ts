import { Injectable, NotFoundException } from '@nestjs/common';
import type { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'NestJS seekhna',
      description: 'CRUD operations banana',
      completed: false,
    },
    {
      id: 2,
      title: 'Decorators samajhna',
      description: '@Controller, @Injectable seekhna',
      completed: true,
    },
  ];
  
  private nextId = 3;
  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    
    return todo;
  }

  createTodo(title: string, description: string): Todo {
    const newTodo: Todo = {
      id: this.nextId++,
      title,
      description,
      completed: false,
    };
    
    this.todos.push(newTodo); 
    return newTodo;
  }

  updateTodo(id: number, title?: string, description?: string, completed?: boolean): Todo {
    const todo = this.getTodoById(id);
    
    if (title !== undefined) {
      todo.title = title;
    }
    if (description !== undefined) {
      todo.description = description;
    }
    if (completed !== undefined) {
      todo.completed = completed;
    }
    
    return todo;
  }

  deleteTodo(id: number): { message: string } {
    const index = this.todos.findIndex((todo) => todo.id === id);
    
    if (index === -1) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    
    this.todos.splice(index, 1); 
    return { message: `Todo with ID ${id} deleted successfully` };
  }
}

