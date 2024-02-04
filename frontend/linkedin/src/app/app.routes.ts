import { Routes } from '@angular/router';
import { HomeComponent } from './tests/home/home.component';

export const routes: Routes = [
    {
        path: "",
        outlet: "test",
        component: HomeComponent
    }
];
