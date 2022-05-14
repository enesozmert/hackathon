import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/entities/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = "https://localhost:44377/api/categories/getall"
  constructor(private httpClient: HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }
}
