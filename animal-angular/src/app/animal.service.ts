import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Animal } from './animal';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private http: Http) { }

  GetAnimals(): Animal[] {
    return this.http.get('http://localhost:3000/animals')
      .map((reponse: Response) => reponse.json())
  }
}
