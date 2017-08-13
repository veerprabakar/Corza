import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.list.componenet.css']
})
export class ProductListComponent{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage: boolean = false;
  imageMargin: number = 2;
  _listFilter: string;

  constructor(){
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List '+ message;

  }

  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter?
                this.performFilter(this.listFilter): this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] =[
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "Sep 10 2017",
      "description": "15 gallon cap rolling garden cart",
      "price": 32.99,
      "starRating": 4.0,
      "imageUrl": "../../images/garden-cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "GDN-0024",
      "releaseDate": "Sep 15 2017",
      "description": "Curved claw steel hammer",
      "price": 65.99,
      "starRating": 3.0,
      "imageUrl": "../../images/freehammer.png"
    }
  ];

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  toggleImage():void{
    this.showImage = !this.showImage;
  }
}
