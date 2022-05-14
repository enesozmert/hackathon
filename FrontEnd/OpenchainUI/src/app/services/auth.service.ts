import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/singleResponseModel';
import { RegisterModel } from '../models/model/registerModel';
import { LoginModel } from '../models/model/loginModel';
import { TokenModel } from '../models/model/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://localhost:44377/api/auth/';
  constructor(private httpClient: HttpClient) { }
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "auth/register", registerModel)
  }
  isAuthenticadet(){
    if (localStorage.getItem("token")) {
      return true;
    }else{
      return false;
    }
  }
}
