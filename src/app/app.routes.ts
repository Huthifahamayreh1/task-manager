import { Routes } from '@angular/router';
import { TaskList } from './pages/task-list/task-list';
import { TaskDetails } from './pages/task-details/task-details';
import { TaskForm } from './pages/task-form/task-form';

import { BlankLayout } from './layout/blank-layout/blank-layout';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
    {
        path: "",
        component: MainLayout,
        children: [{ path: "", component: TaskList }]
    },
    {
        path: 'add-task',
        component: BlankLayout,
        children: [{ path: "", component: TaskForm }]
    },
    {
        path: 'task/:id',
        component: BlankLayout,
        children: [{ path: "", component: TaskDetails }]
    }
];
