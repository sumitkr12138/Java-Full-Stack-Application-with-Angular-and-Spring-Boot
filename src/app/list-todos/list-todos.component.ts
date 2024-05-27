import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

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
export class ListTodosComponent implements OnInit {
  todos:
    | Todo[]
    //todoService: any;
    // = [
    //   new Todo(1, 'Learn to code', false, new Date()),
    //   new Todo(2, 'Learn to read', false, new Date()),
    //   new Todo(3, 'Learn to write', true, new Date()),
    // ];
    | any;
  //todoService: any;
  // = [
  //   new Todo(1, 'Learn to code', false, new Date()),
  //   new Todo(2, 'Learn to read', false, new Date()),
  //   new Todo(3, 'Learn to write', true, new Date()),

  // ];

  message: string | any;
  errorMessage: any;

  constructor(
    private todoService: TodoDataService,
    private router : Router
  ) {}

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retrieveAllTodos('sumitkr12138').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }
  updateTodo(id:any) {
    console.log(`update ${id}`);
    this.router.navigate(['todos',id])

  }

  deleteTodo(id: any) {
    console.log(`delete todo  ${id}`);
    this.todoService.deleteTodo('sumitkr12138', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    });
  }
  // todo = {
  //   id: 1,
  //   description: 'Learning ',
  // };
}
