import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { Product } from '../models/entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44377/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getProductsByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getProductsById(productId: number): Observable<SingleResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbyid?id=" + productId
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
  add(product: Product):Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "products/add", product,)
  }
}
