import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = []
  dataLoaded: boolean = false
  filterText:string=""
  constructor(private productService: ProductService,
     private activatedRoute: ActivatedRoute,
     private toastrService:ToastrService,
     private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      } else {
        this.getProducts()
      }
    })
    //console.log("init çalıştı")
    this.getProducts()
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }
  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }
  addToCart(product:Product){
    console.log(product.productName);
    this.toastrService.success("Added To Cart",product.productName)
    this.cartService.addToCart(product);
  }
}
