import { Injectable } from '@angular/core';
export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  _storageKey = 'tasks';
  // Regular array instead of Signal
  tasks: Task[] = [
    {
      id: 1 ,
      title: 'Learn Angular Basics',
      description: 'Understand components, services, and routing',
      completed: true,
      createdAt: new Date('2026-01-01'),
    },
    {
      id: 2,
      title: 'Build a Project',
      description: 'Create a task manager application',
      completed: false,
      createdAt: new Date('2025-12-23'),
    },
    {
      id: 3,
      title: 'Build a Project',
      description: 'Create a user manager application',
      completed: false,
      createdAt: new Date('2025-12-23'),
    },
  ];

  constructor() {
    // Download data immediately upon service creation
    this._initTasks();}

  _initTasks() {
    const savedTasks = localStorage.getItem(this._storageKey);
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
    else {
      this._saveTasksToLocalStorage(); // Save default tasks if none exist
    }
  }

  // Retrieve completed tasks
  getCompletedTasks(): Task[] {
        console.log(this.tasks);

    return this.tasks.filter(task => task.completed);
  }

  // Fetch active tasks
  getActiveTasks(): Task[] {
    console.log(this.tasks);
    return this.tasks.filter(task => !task.completed);
  }

  getTask(id: number): Task | undefined {
    console.log(this.tasks);
    return this.tasks.find(task => task.id === id);


  }
  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this._saveTasksToLocalStorage();

  }

  addTask(title: string, description: string) {
    const newTask: Task = {

      id: this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1, 
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    this.tasks.push(newTask); // Add the task to the array
    this._saveTasksToLocalStorage();// Save in browsergit
  }
// Update the task status (completed/incomplete) to ensure the status is saved
  toggleTaskStatus(id: number) {
    const task = this.getTask(id);
    if (task) {
      task.completed = !task.completed;
      this._saveTasksToLocalStorage();
    }
  }

  _saveTasksToLocalStorage() {
    localStorage.setItem(this._storageKey, JSON.stringify(this.tasks));
  }

  _getTasksFromLocalStorage(): Task[] {
    if (!localStorage.getItem(this._storageKey)) {
      console.log('No tasks found in localStorage, initializing with default tasks.');
      this._saveTasksToLocalStorage(); // Save default tasks to localStorage
    }
    const tasks = localStorage.getItem(this._storageKey);
    console.log('Retrieved tasks from localStorage:', tasks);
    return tasks ? JSON.parse(tasks) : [];
  }
}

