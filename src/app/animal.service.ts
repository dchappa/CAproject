import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Animal } from './animal/animal.model';
import { ANIMALS } from './mock-animals';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: Http) { }

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }
  // GetAnimals(): Animal[] {
  //   return this.http.get('http://localhost:3000/animals')
  //     .map((reponse: Response) => reponse.json())
  // }
}
