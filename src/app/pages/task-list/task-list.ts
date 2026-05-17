import { Component, inject } from '@angular/core';
import { TaskService, Task } from '../../services/task-service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(TaskService);


 filteredTasks: Task[]= [] ;
   currentFilter: 'all' | 'completed' | 'active' = 'all';
   ngOnInit() {
    this.updateFilteredTasks();
   }
   

  

  setFilter(filter: 'all' | 'completed' | 'active') {
    this.currentFilter = filter;
    this.updateFilteredTasks();
  }
  updateFilteredTasks() {
    
    switch (this.currentFilter) {
      case 'all':
        this.filteredTasks = this.taskService.tasks;
        break;
      case 'completed':
        this.filteredTasks = this.taskService.getCompletedTasks();
        break;
      case 'active':
        this.filteredTasks = this.taskService.getActiveTasks();
        break;
    }
  }

  deleteTask(id:number) {
    this.taskService.deleteTask(id);
    this.updateFilteredTasks(); // Refresh the filtered list after deletion
  }
}