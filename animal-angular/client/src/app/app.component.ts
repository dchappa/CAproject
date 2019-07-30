import { Component, OnInit } from '@angular/core';
import { Animal } from './animal/animal.model';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators, FormsModule } from '@angular/forms';
import { AnimalService } from './animal.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animalForm: FormGroup;
  editForm: FormGroup;
  openEdit: Boolean;
  animals;
  title = 'All about animals';
  addBtn = "Add Animal";
  editBtn = "Edit";
  delBtn = "Delete";
  confirmBtn = "Confirm";
  cancelBtn = "Cancel";
  colors: Array<String>;
  sizes: Array<String>;

  constructor(private aniService : AnimalService, private formBuilder : FormBuilder){
    this.aniService.getAnimals().subscribe(result => {this.animals = result});
    this.openEdit = false;
    this.animalForm = this.formBuilder.group({
      animalName: new FormControl('', Validators.required),
      animalColor: new FormControl('', Validators.required),
      animalSize: new FormControl('', Validators.required),
      animalDOB: new FormControl('', Validators.required),
    });
    this.editForm = this.formBuilder.group({
      editName: ['', [Validators.required, Validators.minLength(1)]],
      editColor: ['', [Validators.required, Validators.minLength(1)]],
      editSize: ['', [Validators.required, Validators.minLength(1)]],
      editDOB: ['', [Validators.required, Validators.minLength(1)]],
    });
    this.colors = ['Red', 'Blue', 'Green', 'Yellow'];
    this.sizes = ['Small', 'Medium', 'Large', 'Super-sized'];
  }


  ngOnInit(){

  }


  addAnimal(animalData) {
    console.log(this.animalForm.status);
    let animal = JSON.stringify({color: animalData.animalColor, dob: animalData.animalDOB, name: animalData.animalName, size: animalData.animalSize});
    this.aniService.addAnimal(animal).subscribe(response => {this.animals.push(response); this.animals[this.animals.length-1].display = false;
    console.log(response)},
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
        this.animals[parseInt(currAnimal)].display = false;
      }
    }
  }

  delFromArray(animalData){
    for(let animal in this.animals){
      if(this.animals[parseInt(animal)]._id == animalData._id){
        this.animals.splice(parseInt(animal),1);
      }
    }
  }

  onClickOpenForm(id){
    console.log(id);
    for(let currAnimal in this.animals){
      if(this.animals[parseInt(currAnimal)]._id == id){
        this.animals[parseInt(currAnimal)].display = true;
      }
    }
  }

  onClickCloseForm(id){
    for(let currAnimal in this.animals){
      if(this.animals[parseInt(currAnimal)]._id == id){
        this.animals[parseInt(currAnimal)].display = false;
      }
    }
  }
}
