import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit{
  
  @Input() pro : any= [];
  @Output() addpro = new EventEmitter();
  num : number | any = 1;
  quantityprice : any = this.pro.proPrice;
  finalobj : any =[];

  constructor(){}
  ngOnInit(): void {
    this.quantityprice = this.pro.proPrice * this.num;
  }

  minus(){
    console.log("minus triggered")
    this.num--
    this.quantityprice = this.quantityprice-this.pro.proPrice;
  }
  plus(){
    this.num++
    this.quantityprice = this.pro.proPrice * this.num;
  }




  onClick(){
    this.finalobj = [{...this.pro, number : this.num, quantityaddprice : this.quantityprice }]
    console.log(this.finalobj);
    // console.log(this.array)
    this.addpro.emit(this.finalobj);
    
  }


}
