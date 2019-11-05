import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Alimento} from '../models/alimentos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlimentosService {

  API_URI = 'http://localhost:3000';
  constructor(private  http:HttpClient) { }


  getProducts(){
    return this.http.get(`${this.API_URI}/alimentos`);
  }
  getProductById(id:string):Observable<any>{
    return this.http.get(`${this.API_URI}/alimentos:${id}`);
  }
  createProduct(alimento:Alimento){
    return this.http.post(`${this.API_URI}/alimentos`,alimento);
  }
  deleteProduct (id:string){
    return this.http.delete(`${this.API_URI}/alimentos:${id}`);
  }  
  updateProduct(id:string,alimento:Alimento){
    return this.http.put(`${this.API_URI}/alimentos:${id}`,alimento);
  }
}
