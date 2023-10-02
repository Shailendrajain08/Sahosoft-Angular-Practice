import { Component } from '@angular/core';
import { Num } from '../num';
import { MessageService } from '../message.service';
import { EmployeeServService } from '../employee-serv.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {


  // --------------------  Directive Class 1-2 data ---------------------
  //   gender='male';
  //   name="Shailendra Jain";
  //   _msg:Promise<string>;
  //   mynumenum = Num;

  //   constructor(private _messageService : MessageService){
  // this._msg = _messageService.getmessage();
  //   }

  //   company={
  //     name:'Sanmati Technologies',
  //     city:'Noida',
  //     state:'UP',
  //     country:'India'
  //   }

  //   // company: any;
  //   isValid=true;
  //   isValid2!: string;

  //   onchange(val:any){
  //       this.isValid=val;
  //   }

  //   onchange2(val: string) {
  //     if (val == "male") {
  //       this.isValid2 = val;
  //     }
  //     else if (val == "female") {
  //       this.isValid2 = val;
  //     }
  //     else {
  //       this.isValid2 = val;
  //     }
  //   }

  // ----------------- Directive Class 3 Data --------------------

  allemployee: Promise<any>;

  employees = [
    { id: 1, name: 'Shailendra Jain' },
    { id: 2, name: 'Shailu Jain' },
    { id: 3, name: 'Dharmendra Jain' },
    { id: 4, name: 'Lokendra Jain' },
    { id: 5, name: 'Monu Jain' },
    { id: 6, name: 'Bittu Jain' },
  ]

  constructor(private _employeeService: EmployeeServService) {
    this.allemployee = _employeeService.getallemployees();
  }


  getalldata() {
    this.employees = [
      { id: 1, name: 'Shailendra Jain' },
      { id: 2, name: 'Shailu Jain' },
      { id: 3, name: 'Dharmendra Jain' },
      { id: 4, name: 'Lokendra Jain' },
      { id: 5, name: 'Monu Jain' },
      { id: 6, name: 'Bittu Jain' },
      { id: 6, name: 'Narendra Jain' },
      { id: 7, name: 'Kanti Jain' },
    ]
  }

  fntrackby(index: number, employee: any) {
    return employee.name;
  }

}
