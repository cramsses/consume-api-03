import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { LogService } from '../service/log.service';
import { Log } from '../model/log';


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [NgFor],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit {

  logs:any[]=[]

  constructor(private logService:LogService){}

  ngOnInit(): void {
    this.logService.findAll().subscribe(
      data=>{
        console.log('subscribe logService findall', data);
      this.logs=data;
      }
    )
  
  }

  }



