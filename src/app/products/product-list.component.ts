import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({

    templateUrl :'./product-list.component.html',
    styleUrls : ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{

pageTitle : string = "Product List"; // interpolation
pageShow : string ="Image"; // interpolation
width : number = 50;
margin : number = 2;
showImage : boolean = false; // interpolation
errorMessage : string = '';
    sub!: Subscription;

private _listFilter: string = '';
    productService: any;
get listFilter(): string{
return this._listFilter;
}
set listFilter(value:string) {
    this._listFilter = value;
 console.log('In setter:' , value);
 this.filteredProducts = this.performFilter(value); // Filteing setter or setting value
}

filteredProducts: IProduct[] =[];  //Filtering  
products :IProduct[] = [
    {
        "productId": 2 ,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 14, 2018",
        "description": "15 rays",
        "price" : 32.44 ,
        "starRating":4.2 ,
        "imageUrl":"assets/images/garden_cart.png"
    
    },
    
    {
        "productId": 5 ,
        "productName": "Hammer",
        "productCode": "GDN-0027",
        "releaseDate": "March 13, 2098",
        "description": "Curved claw",
        "price" : 1132.04 ,
        "starRating":4.8 ,
        "imageUrl":"assets/images/hammer.png"
    } ,
    {
        "productId": 4 ,
                "productName": "Towel",
                "productCode": "GDN-00333",
                "releaseDate": "March 5, 2018",
                "description": "Light Color",
                "price" : 32.44 ,
                "starRating":2.2 ,
                "imageUrl":"assets/images/towel.png"
    }
];

constructor(public productServices : ProductService) {} 

performFilter(filterBy : string): IProduct[]{    // arrow function and filtering
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleUpperCase().includes(filterBy));
}



toggleImage() : void{
    this.showImage = !this.showImage;
}

ngOnInit(): void{
this.sub = this.productServices.getProducts().subscribe({
    next : products => {
    this.products = products;
    this.filteredProducts = this.products;
    },
    error : err => this.errorMessage = err
    
 });

 
    //this.listFilter = 'cart';
}
 ngOnDestroy(): void {
    this.sub.unsubscribe();
 }

onRatingClicked(message: string) : void{
    this.pageTitle = 'Product List' + message;
}

}



