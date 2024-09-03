import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../type/type';

@Injectable({
  providedIn: 'root'
})
export class ApieCommerceService {
  private url = 'https://665d5eede88051d604064905.mockapi.io/products/';
  constructor(private html: HttpClient) {}

  getAll(): Observable<product[]> {
    return this.html.get<product[]>(this.url);
  }
  getOne(id: string): Observable<product> {
    return this.html.get<product>(this.url + id);
  }
  addProductToCart(id: string): Observable<product> {
    return this.html.get<product>(id);
  }
}


