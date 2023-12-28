import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
pageTitle:string ='Product Detail';
product : IProduct | undefined 



constructor( private route: ActivatedRoute,
             private router:Router) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get("id")); // snapshot routing
  this.pageTitle = `ProductDetails: ${id}`;

this.product = {
  "productId": 4 ,
            "productName": "Towel",
            "productCode": "GDN-00333",
            "releaseDate": "March 5, 2018",
            "description": "Light Color",
            "price" : 32.44 ,
            "starRating":2.2 ,
            "imageUrl":"assets/images/towel.png"
};
  }
  onBack(): void{
    this.router.navigate(['/products']);
  }
}
