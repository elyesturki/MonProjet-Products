import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductsListService {

  URL: string = 'http://localhost:3000/products';
   /*data : Product[] =  [ {code: 'P1000', nom: 'Café', prixUnitaire: 1500.4},
   {code: 'P2000', nom: 'the', prixUnitaire: 1600.6},
   {code: 'P3000', nom: 'sucre', prixUnitaire: 1700.5},
   {code: 'P4000', nom: 'Coca Cola', prixUnitaire: 1800.5}
 ];*/
 constructor( private _service: HttpClient) { }
 getAllProducts(): Observable<Product[] > {
    return this._service.
    get<Product[]>(this.URL);
  }
}
