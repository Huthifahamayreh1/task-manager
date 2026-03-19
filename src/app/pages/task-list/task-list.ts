import { Component,computed,inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(TaskService);
  filter =signal<'all'| 'completed'|'active'>('all');
  filteredTask= computed(()=>{
switch (this.filter()){
case'all':
return this.taskService.tasks();
case'completed':
return this.taskService.completedTask();
case'active':
return this.taskService.activTask();
default:
return this.taskService.tasks();
}
  });
  setFilter(filrer:'all'| 'completed'|'active'){
this.filter.set(filrer);

  }
deleteTask(id:number){
this.taskService.deleteTask(id);

}

}
