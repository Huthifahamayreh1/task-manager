import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { TaskService } from '../../services/task-service';


@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  private taskService=inject(TaskService);
  private fb = inject(FormBuilder);
  private router = inject(Router)
  taskForm= this.fb.group({
    title:["",[Validators.required,Validators.minLength(3)]],
    description:["",[Validators.required,Validators.minLength(3)]]
  });
  onSubmit(){

    if(this.taskForm.valid){
      console.log('Form is Valid')
      const{title,description} = this.taskForm.value
      if(title&&description){
this.taskService.addTask(title,description)

      }
      this.taskForm.reset();
      this.router.navigate(['/'])

      
    }
  }
}
