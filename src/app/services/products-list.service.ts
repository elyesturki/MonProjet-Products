import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductsListService {

  URL: string = 'http://localhost:3000/products';
 constructor( private _service: HttpClient) { }
 getAllProducts(): Observable<Product[] > {
    return this._service.
    get<Product[]>(this.URL);
  }
}
