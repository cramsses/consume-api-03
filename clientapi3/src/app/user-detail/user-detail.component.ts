import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit{

  userdetail:any;

  constructor(
    private userService:UserService,
    @Inject(MAT_DIALOG_DATA) public id_user:number
  ){}

  ngOnInit(): void {
    this.userService.findById(this.id_user).subscribe(
      data=>{
        console.log('subscribe findall', data);
        this.userdetail=data;
      }
    )   
  }

}
