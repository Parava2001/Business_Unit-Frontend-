

// nested component ( component inside another component)
// here the star component is inside the product list component

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector :'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']

})


export class StarComponent implements OnChanges{  //lifecycle hooks
   @Input() rating : number = 0;  // input decorator
    cropWidth : number = 75;

    @Output() ratingClicked: EventEmitter<string> =new EventEmitter<string>();  // output decorator
    
    ngOnChanges(): void {
     this.cropWidth = this.rating * 75/5;
    }

    onClick(): void{
       this.ratingClicked.emit(` :The rating is ${this.rating}`);
    }
      
   
    }

