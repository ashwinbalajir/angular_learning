import { Component, OnInit } from '@angular/core';
// import { product } from '../../api/products';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:IProduct[];
  // listFilter:string;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage:string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked(message: string): void {
console.log(message);  }


  constructor(private _productService:ProductService) {


   }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );;
    this.listFilter;
  }
  toggleImage(){

    this.showImage=!this.showImage;
  }

}
