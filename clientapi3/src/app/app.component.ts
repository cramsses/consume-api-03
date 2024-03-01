import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import { LogComponent } from './log/log.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,UserListComponent,LogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clientapi3';
}
