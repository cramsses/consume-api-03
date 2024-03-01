import { Routes } from '@angular/router';
import{UserListComponent} from './user-list/user-list.component';
import{LogComponent} from './log/log.component';

export const routes: Routes = [
    {path:'users',component:UserListComponent},
    {path:'log',component:LogComponent},

];
