import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/entities/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products: Product[] = []
  product:Product;
  dataLoaded: boolean = false
  filterText:string=""
  @Input() productId: number
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
    console.log(this.productId);
    this.getProductById(this.productId);
  }
  getProducts() {
    console.log("Metot async çalışşır")
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true
    })
  }
  getProductById(productId: number)
  {
    this.productService.getProductsById(productId).subscribe(response =>
      {
        this.product = response.data;
      })
  }
  getProductsByCategory(categoryId: number) {
    console.log("Metot async çalışşır")
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
