import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Animal } from './animal/animal.model';
import { ANIMALS } from './mock-animals';



@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    return this.http.get('http://localhost:3000/animals')
      .pipe(map(res => res),
            catchError(e => throwError(new Error(e))))
    }

  addAnimal(animal) {
        const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'my-auth-token'
        })
      };
    return this.http.post('http://localhost:3000/animals', animal, httpOptions)
      .pipe(catchError(e => throwError(new Error(e))))
  }

  deleteAnimal(animalID){
    console.log(animalID);
    return this.http.delete('http://localhost:3000/animals/' + animalID)
      .pipe(catchError(e => throwError(new Error(e))))
  }

  editAnimal(animal, animalID) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log(animalID);
    console.log(animal);
    return this.http.put('http://localhost:3000/animals/' + animal._id, animalID, httpOptions)
      .pipe(catchError(e => throwError(new Error(e))))

  }
}
