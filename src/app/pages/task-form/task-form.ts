import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-task-form',
  standalone: true, 
  imports: [ReactiveFormsModule, RouterLink,FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService = inject(TaskService);
  private router = inject(Router);
  title: string = '';
  description: string = '';

  errorMessages: { title?: string, description?: string } = {};

  onSubmit() {
this.errorMessages = {}; 
    let isValid = true;

    if (!this.title || this.title.length < 3) {
      this.errorMessages.title = 'Title is required and must be at least 3 characters long.';
      isValid = false;
    }

    if (!this.description || this.description.length < 3) {
      this.errorMessages.description = 'Description is required and must be at least 3 characters long.';
      isValid = false;
    }

    if (isValid) {
      this.taskService.addTask(this.title, this.description);

        
        this.router.navigate(['/']);
      }
    }
  }
