import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  allProducts:any=[]
  cart:any=[]
constructor(private service:ItemsService){}
ngOnInit(){
  this.service.allItems().subscribe((res)=>{
    console.log(res)
    this.allProducts=res
  })
  this.service.products().subscribe((res)=>{

    this.cart=res.products
    console.log(this.cart,"cart")
  })
}
goToTab3(tabGroup:MatTabGroup){
tabGroup.selectedIndex=2
}
}
