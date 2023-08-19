import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/item.model';
import { ProductService } from '../shared/service/shopping.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit{
  
  productData : Product[] = [];
  addproduct : Product[] =[];
  constructor(private proServe : ProductService){}
  ngOnInit(): void {
    this.proServe.productSub.subscribe((param : any)=>{
      this.productData = param;
      console.log(this.productData)

    })
   
  }

  add(object : any){
    this.addproduct.push(...object)
    console.log(this.addproduct);



  }


}
