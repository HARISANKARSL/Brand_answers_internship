import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { VideoplayerComponent } from 'src/app/Models/videoplayer/videoplayer.component';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any=[]
  courses:any=[]
  subjects:any=[]
   constructor(public dialog: MatDialog,private items:ItemsService) {}
   ngOnInit(){
this.items.getItems().subscribe((res)=>{
 
  this.data=res.offer;
  console.log(this.data)
});
this.items.getItems().subscribe((res)=>{
  this.courses=res.course;
  console.log(this.courses,"courses")
})
this.items.getItems().subscribe((res)=>{
  this.subjects=res.subject;
  console.log(this.subjects,"subject")
})
   }
  customOptions: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        loop:true
      },
      400: {
        items: 2
      },
      900: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }
  option: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2,
        loop:true
      },
      600: {
        items: 3
      },
      900: {
        items: 5
      },
      1000: {
        items: 7
      }
    },
    nav: true
  }
  openDialog(url:any) {
    const dialogRef = this.dialog.open(VideoplayerComponent, {
      maxWidth: '100%',
      width: '800px',
      
    });
  }
  
  
}
