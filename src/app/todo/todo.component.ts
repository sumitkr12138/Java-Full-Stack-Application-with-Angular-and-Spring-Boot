import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{
saveTodo: any;
id:number | any;
todo: Todo | any
  name: any;

constructor(
  private todoService: TodoDataService,
  private route: ActivatedRoute
){}

ngOnInit() {

  this.id = this.route.snapshot.params['id'];
  this.todo = new Todo(1,'',false,new Date())
  this.todoService.retrieveTodo('sumitkr12138',this.id).subscribe (
    data => this.todo = data
  )
 
 
}
}
