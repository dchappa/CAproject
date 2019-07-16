import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { AnimalService } from '../animal.service';
import {Http,Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  form = new FormGroup({
    control: new FormControl()
  });

  constructor(fb: FormBuilder, private newService : AnimalService) {}
    Repdata;
    addBtn = "Add Animal";


  ngOnInit()
    this.newService.GetAnimals().subscribe(data => this.Repdata = data)
  }

  // onAdd(value) : void {
  //   onAdd = function(animal){
  //     animal.mode = this.addBtn;
  //     this.newS
  //   }
  //  }

}
