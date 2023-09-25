import { Component } from '@angular/core';
import { Num } from '../num';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  mynumenum = Num;

  company={
    name:'Sahosoft Technologies',
    city:'Noida',
    state:'UP',
    country:'India'
  }

  // company: any;
  isValid=true;
  isValid2!: string;

  onchange(val:any){
      this.isValid=val;
  }

  onchange2(val: string) {
    if (val == "male") {
      this.isValid2 = val;
    } 
    else if (val == "female") {
      this.isValid2 = val;
    }
    else {
      this.isValid2 = val;
    }
  }
}
