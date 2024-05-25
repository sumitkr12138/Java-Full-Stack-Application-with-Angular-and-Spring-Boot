import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn to code', false, new Date()),
    new Todo(2, 'Learn to read', false, new Date()),
    new Todo(3, 'Learn to write', true, new Date()),

    // { id: 1, description: 'Learn to code' },
    // { id: 2, description: 'coding' },
    // { id: 3, description: ' Dancing' },
  ];

  todo = {
    id: 1,
    description: 'Learning ',
  };
}
