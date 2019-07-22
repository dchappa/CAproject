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

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.animalForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      animalName: new FormControl(''),
      addAnimal: new FormControl(''),

    });
    // this.animalForm.valueChanges.subscribe(data=>this.animalForm.animalFormOnDataChange(data));

  }
  addBtn = "Add Animal";

  ngOnInit(){
    this.aniService.getAnimals()
  }


  title = 'All about animals';
}
