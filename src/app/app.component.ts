import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports:[TaskListComponent],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-testing-project';

  addTask(task: string) {
    
  }

  deleteTask(task: string) {
  }

  getTasks(): string[] {
    return [];
  }
}