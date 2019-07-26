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
  editForm: FormGroup;
  animalName: FormControl;
  addButton: FormControl;
  animalColor: FormControl;
  animalSize: FormControl;
  animalDOB: FormControl;
  editName: FormControl;
  confirmButton: FormControl;
  editColor: FormControl;
  editSize: FormControl;
  editDOB: FormControl;
  openEdit: Boolean;
  animals;

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.animalForm = this.formBuilder.group({
      animalName: new FormControl(''),
      addButton: new FormControl(''),
      animalColor: new FormControl(''),
      animalSize: new FormControl(''),
      animalDOB: new FormControl(''),
    });
    this.editForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: [''],
      editName: new FormControl(''),
      confirmButton: new FormControl(''),
      editColor: new FormControl(''),
      editSize: new FormControl(''),
      editDOB: new FormControl(''),
    });

    this.aniService.getAnimals().subscribe(result => {this.animals = result});
    this.openEdit = false;
  }
  addBtn = "Add Animal";
  editBtn = "Edit";
  delBtn = "Delete";
  confirmBtn = "Confirm";
  cancelBtn = "Cancel";

  ngOnInit(){
    this.aniService.getAnimals()
  }

  addAnimal(animalData) {
    let animal = JSON.stringify({color: animalData.animalColor, dob: animalData.animalDOB, name: animalData.animalName, size: animalData.animalSize});
    this.aniService.addAnimal(animal).subscribe(response => {this.animals.push(response);},
                                                err => console.log(err));
  }

  deleteAnimal(animalData){
    this.aniService.deleteAnimal(animalData._id).subscribe(response => {this.delFromArray(animalData);},
                                                err => console.log(err));
  }

  editAnimal(animal, animalData){
    console.log(animal);
    console.log(animalData);
    let newAnimal = JSON.stringify({color: animalData.editColor, dob: animalData.editDOB, name: animalData.editName, size: animalData.editSize});
    this.aniService.editAnimal(animal, newAnimal).subscribe(response => this.editFromArray(animal,newAnimal),
                                                              err => console.log(err));
  }

  editFromArray(animal, newAnimal){
    let parsed = JSON.parse(newAnimal);
    for(let currAnimal in this.animals){
      if(this.animals[parseInt(currAnimal)]._id == animal._id){
        this.animals[parseInt(currAnimal)].color = parsed.color;
        this.animals[parseInt(currAnimal)].dob = parsed.dob;
        this.animals[parseInt(currAnimal)].name = parsed.name;
        this.animals[parseInt(currAnimal)].size = parsed.size;
      }
    }
    this.openEdit = false;
  }

  delFromArray(animalData){
    for(let animal in this.animals){
      if(this.animals[parseInt(animal)]._id == animalData._id){
        this.animals.splice(parseInt(animal),1);
      }
    }
  }

  onClickOpenForm(){
    this.openEdit = true;
  }

  onClickCloseForm(){
    this.openEdit = false;
  }


  title = 'All about animals';
}
