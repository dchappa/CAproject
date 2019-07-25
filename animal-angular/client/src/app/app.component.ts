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
  addButton: FormControl;
  animalColor: FormControl;
  animalSize: FormControl;
  animalDOB: FormControl;
  animals;

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.animalForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      animalName: new FormControl(''),
      addButton: new FormControl(''),
      animalColor: new FormControl(''),
      animalSize: new FormControl(''),
      animalDOB: new FormControl(''),
    });

    this.aniService.getAnimals().subscribe(result => {console.log(result); this.animals = result});
  }
  addBtn = "Add Animal";

  ngOnInit(){
    this.aniService.getAnimals()
  }

  addAnimal(animalData) {
    console.log(animalData);
    let animal = JSON.stringify({color: animalData.animalColor, dob: animalData.animalDOB, name: animalData.animalName, size: animalData.animalSize});
    console.log(animal);
    this.aniService.addAnimal(animal).subscribe(response => {console.log(response); this.animals.push(response);},
                                                err => console.log(err));
  }

  deleteAnimal(){
    
  }


  title = 'All about animals';
}
