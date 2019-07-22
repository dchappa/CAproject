import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { do } from 'rxjs/operators';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import { Animal } from './animal/animal.model';
import { ANIMALS } from './mock-animals';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  // getAnimals(): Observable<Animal[]> {
  //   return of(ANIMALS);
  // }
  getAnimals(): Observable<Animal[]> {
    return this.http.get('http://localhost:3000/animals')
      .pipe(map((reponse: Response) => reponse.json()))
  }

}
