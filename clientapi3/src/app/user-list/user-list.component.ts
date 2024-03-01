import { Component, OnInit  } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';
import { NgFor } from '@angular/common';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit  {
  
  users:any[]=[];

  constructor(
    private userService:UserService,
    private matDialog: MatDialog
    ){ }

  ngOnInit(): void {
    this.userService.findAll().subscribe(
      data=>{
        console.log('subscribe findall', data);
        this.users=data;
      }
    )   
  }

  openModal(user_id:number) {
    this.matDialog.open(UserDetailComponent, {
      "width": '6000px',
      "maxHeight": '90vh',
      "data": user_id,
      "autoFocus": false
    });
  }

}
