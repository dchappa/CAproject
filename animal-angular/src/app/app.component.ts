import { Component, OnInit } from '@angular/core';
import { Animal } from './animal/animal.model';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { AnimalService } from './animal.serice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private aniService : AnimalService,){
    Repdata;
  }

  ngOnInit(){
    this.aniService.getAnimals()
  }

  
  title = 'All about animals';
}
