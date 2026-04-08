import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService, Task } from '../../services/task-service';
import { CommonModule } from '@angular/common'; // مهم لاستخدام الـ Pipes في الـ HTML

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);

  task: Task | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.task = this.taskService.getTask(Number(id));
    }
  }
}