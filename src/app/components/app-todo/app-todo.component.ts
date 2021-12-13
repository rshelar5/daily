import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app-todo.component.html',
  styleUrls: ['./app-todo.component.scss']
})
export class AppTodoComponent implements OnInit {

  constructor() { }

  @ViewChild('todoInputBox',{read:true,static:true})
  todoInputBox!: ElementRef;

  ngOnInit(): void {
  }
  addCalled(){
    console.log(this.todoInputBox.nativeElement.textContent);
  }

}
