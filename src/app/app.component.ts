import { Component } from '@angular/core';
import { Employee } from './employee';


interface abc {
  // showdata();
  // show1();
  // display();
}

interface emp {
  id: number;
  name: string;
  gender: string
}

class xyz implements abc {
  showdata() {
    console.log("Hello");
  }
  show1() {
    console.log("Hi");
  }
  display() {
    console.log("How are you ?")
  }
}


class student {
  constructor() {
    console.log("Student constructor called ");
  }

  display() {
    console.log("Hello Sanmati");
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahosoft-practice-file';

  employees: emp[] = [
    { id: 101, name: 'Shailendra', gender: 'Male' },
    { id: 101, name: 'Shailendra', gender: 'Male' },
    { id: 101, name: 'Shailendra', gender: 'Male' },
  ]

  constructor(private _employee: Employee, private _student: student, private _xyz: xyz) {
    _employee.show();
    console.log(_employee.age);
    _student.display();

    _xyz.display();
    _xyz.show1();
    _xyz.showdata();

    // let mycolor:Color;
    // mycolor=Color.red;
    // console.log(mycolor);
     let result= this.show1();
     console.log(result);

    console.log(this.show1());
    this.show5("Dharmendra");
    // this.show5(12);
    // this.show5("Dharmendra","kljhklj");
    this.show6(101, "Shailendra");

    let output1=this.display<string>("Sanmati");
    let output2=this.display<number>(100);

    console.log(output1)
    console.log(output2);
    this.ifMethod();

  }

  ifMethod() {
    if (true) {
      console.log("This will always executed");
    }

    if (false) {
      console.log("This will never executed");
    } else {
      console.log("Else will executed");
    }

    let x: number = 40, y: number = 30;

    if (x < y) {
      console.log("x is less than y");
    }

    if (x < y) {
      console.log("x is less than y");
    }else{
      console.log("X is greater than y or equal to y");
    }

    if (x < y) {
      console.log("X is less than y");
    } else if (x > y) {
      console.log("X is greater than y");
    } else {
      console.log("x is equal to y");
    }
    x > y ? console.log("X is greater than y") : console.log("X is less than or equal to y");

  }

  display<T>(arg: T): T {
    return arg;
  }

  show1() {
    // console.log("Hello");
    return "Hello World";
  }

  show2(): void {
    console.log("Hi");
  }

  show3(): number {
    console.log("89");
    return 12;
  }

  show4(): string {
    return "lkj"
  }

  show5(name: string) {
    console.log("Hello " + name);
  }

  show6(id: number, name: string) {
    console.log("ID " + id + " Name " + name);
  }


}
