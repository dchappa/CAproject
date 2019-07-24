import { Component, OnInit } from '@angular/core';
import { Animal } from './animal/animal.model';
import { FormGroup, FormControl, FormBuilder,Validators, FormsModule } from '@angular/forms';
import { AnimalService } from './animal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animalForm: FormGroup;
  animalName: FormControl;
  addAnimal: FormControl;
  animals;

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.animalForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      animalName: new FormControl(''),
      addAnimal: new FormControl(''),
    });

    this.aniService.getAnimals().subscribe(result => {console.log(result); this.animals = result});
  }
  addBtn = "Add Animal";

  ngOnInit(){
    // this.aniService.getAnimals()
  }


  title = 'All about animals';
}
