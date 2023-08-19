import { BehaviorSubject, Subject } from "rxjs";
import { Product } from "../model/item.model";

export class ProductService{
    productDataList : Product[] | any = [new Product("https://upload.wikimedia.org/wikipedia/commons/b/b1/Pencil.jpg","Pencils",50,1,50),
    new Product("https://m.media-amazon.com/images/I/51w5MjPB7KL._AC_SS130_.jpg","Tea",20,1,20)
]


    productSub = new BehaviorSubject(this.productDataList.slice());
    
    getProductList(){
        return this.productDataList.slice()
    }

    addNewProduct(newProduct : any){
        this.productDataList.push(newProduct);
        this.productSub.next(this.productDataList.slice())
        console.log(this.productDataList)

    }
}





















