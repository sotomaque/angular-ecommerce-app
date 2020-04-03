import { Product } from './../../common/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  // inject our product service into this component
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  // invoke service, call get products list, subscribe
  // async, once its resolved, assign data (returned from call)
  // to our products array
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
