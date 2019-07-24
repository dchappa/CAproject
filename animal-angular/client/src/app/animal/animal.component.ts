import { Component, OnInit, Input } from '@angular/core';
import { Animal } from './animal.model'
import { Observable, of } from 'rxjs'
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input() animals: Animal[];

  constructor(private animalService: AnimalService) { }

  getAnimals() {
        console.log(this.animalService.getAnimals().subscribe(result => {console.log(result); result}))
  }

  ngOnInit() {
    this.getAnimals();
  }

}
