import { Routes } from '@angular/router';
import { TaskList } from './pages/task-list/task-list';
import { TaskDetails } from './pages/task-details/task-details';
import { TaskForm } from './pages/task-form/task-form';

export const routes: Routes = [
    {
        path:"",
        component:TaskList
    },
    {
        path:"task/:id",
        component:TaskDetails
    },
    {
        path:"add-task",
        component:TaskForm


    }
];
