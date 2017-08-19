import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product.list.componenet.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageHeight: number = 50;
  showImage: boolean = false;
  imageMargin: number = 2;
  _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;

  constructor(private _productService: ProductService) {

  }

  ngOnInit() {
    this._productService.getProducts()
              .subscribe(products => {this.products = products;
                                this.filteredProducts = products; },
                         error => this.errorMessage = <any>error);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }

  get listFilter(): string {
      return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ?
                this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
