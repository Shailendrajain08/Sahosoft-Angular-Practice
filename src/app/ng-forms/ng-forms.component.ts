import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-forms',
  templateUrl: './ng-forms.component.html',
  styleUrls: ['./ng-forms.component.css']
})
export class NgFormsComponent {
  Register(regdata:NgForm){
    console.log(regdata.value);
    console.log(regdata.valid);
  }

}
