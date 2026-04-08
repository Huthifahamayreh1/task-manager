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

  currentFilter: 'all' | 'completed' | 'active' = 'all';

  get filteredTasks(): Task[] {
    switch (this.currentFilter) {
      case 'all':
        return this.taskService.tasks;
      case 'completed':
        return this.taskService.getCompletedTasks();
      case 'active':
        return this.taskService.getActiveTasks();
      default:
        return this.taskService.tasks;
    }
  }

  setFilter(filter: 'all' | 'completed' | 'active') {
    this.currentFilter = filter;
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}