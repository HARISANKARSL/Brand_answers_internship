import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  allProducts:any=[]
  searchInput="";
  filteredProducts:any=[]
  pagination:number=1;
itemsPerPage:number=6  

 
constructor(private service:ItemsService){}
ngOnInit(){
  this.service.productlist().subscribe((res)=>{

    this.filteredProducts=res
    this.allProducts=res;
  console.log(this.allProducts)
  
  })
}
filterProducts() {

  this.filteredProducts = this.allProducts.filter(
    (p:any) => {
     
      console.log(p.category)
      return p.title.toLowerCase().includes(this.searchInput.toLowerCase())
    }
    
  )

}

sort(order:any){
if(order==='asc'){
  this.filteredProducts.sort((p1:any,p2:any )=>{
   return p1.price>p2.price?1:-1
  })
}else{
  
    this.filteredProducts.sort((p1:any,p2:any )=>{
      return p1.price>p2.price?-1:1
    })

}

}
filter(category:string){
  this.filteredProducts = this.allProducts
  .filter((a:any)=>{
    if(a.category==="men's clothing" || a.category==="women's clothing"){
      a.category="fashion"
    }
    if(a.category == category || category==''){
      return a;
    }
  })
}
}

