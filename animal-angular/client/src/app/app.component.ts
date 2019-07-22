import { Component, OnInit } from '@angular/core';
import { Animal } from './animal/animal.model';
import { FormGroup, FormControl, FormBuilder,Validators, FormsModule } from '@angular/forms';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animalForm: FormGroup;
  animalName: FormControl;
  addAnimal: FormControl;
  animals: Objects[];

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.animalForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      animalName: new FormControl(''),
      addAnimal: new FormControl(''),
    });
    animals = this.aniService.getAnimals();
  }
  addBtn = "Add Animal";

  ngOnInit(){
    this.aniService.getAnimals()
  }


  title = 'All about animals';
}
