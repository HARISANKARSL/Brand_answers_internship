import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.css']
})
export class VideoplayerComponent {
  videos=[]
constructor(private auth:ItemsService){}
ngOnInit(){
  this.auth.getItems().subscribe((res)=>{
    this.videos=res.offer
    console.log(this.videos,"videos")
  })
}
}
