import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
})
export class CreateSurveyPage implements OnInit {

  createSurveyForm = new FormGroup({
    title: new FormControl("", [Validators.required,Validators.min(3)]),
    
    publicationText: new FormControl("", [Validators.required, Validators.min(3)]),


  })


  

  constructor() { }

  ngOnInit() {
  }

  createSurvey(){
    
  }
}
