import { Component } from '@angular/core';
import { Employee } from './employee';

// --------------------- Class 4 Data ---------------------------------
// interface abc {
//   // showdata();
//   // show1();
//   // display();
// }

// interface emp {
//   id: number;
//   name: string;
//   gender: string
// }

// class xyz implements abc {
//   showdata() {
//     console.log("Hello");
//   }
//   show1() {
//     console.log("Hi");
//   }
//   display() {
//     console.log("How are you ?")
//   }
// }


// class student {
//   constructor() {
//     console.log("Student constructor called ");
//   }

//   display() {
//     console.log("Hello Sanmati");
//   }
// }

// --------------------- Class 5 Data ---------------------------------

class abc {
  show1() {
    console.log("Hello Show1");
  }

  private show2() {
    console.log("hello Show2");
  }
  protected show3() {
    console.log("Hello Show3");
  }
}

class xyz extends abc {

  callmethods() {
    this.show1();
    //this.show2();
    this.show3();
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sahosoft-practice-file';

// --------------------- Class 4 Data ---------------------------------

  // employees: emp[] = [
  //   { id: 101, name: 'Shailendra', gender: 'Male' },
  //   { id: 101, name: 'Shailendra', gender: 'Male' },
  //   { id: 101, name: 'Shailendra', gender: 'Male' },
  // ]

  // constructor(private _employee: Employee, private _student: student, private _xyz: xyz) {
  //   _employee.show();
  //   console.log(_employee.age);
  //   _student.display();

  //   _xyz.display();
  //   _xyz.show1();
  //   _xyz.showdata();

  //   // let mycolor:Color;
  //   // mycolor=Color.red;
  //   // console.log(mycolor);
  //    let result= this.show1();
  //    console.log(result);

  //   console.log(this.show1());
  //   this.show5("Dharmendra");
  //   // this.show5(12);
  //   // this.show5("Dharmendra","kljhklj");
  //   this.show6(101, "Shailendra");

  //   let output1=this.display<string>("Sanmati");
  //   let output2=this.display<number>(100);

  //   console.log(output1)
  //   console.log(output2);
  //   this.ifMethod();

  // }

  // ifMethod() {
  //   if (true) {
  //     console.log("This will always executed");
  //   }

  //   if (false) {
  //     console.log("This will never executed");
  //   } else {
  //     console.log("Else will executed");
  //   }

  //   let x: number = 40, y: number = 30;

  //   if (x < y) {
  //     console.log("x is less than y");
  //   }

  //   if (x < y) {
  //     console.log("x is less than y");
  //   }else{
  //     console.log("X is greater than y or equal to y");
  //   }

  //   if (x < y) {
  //     console.log("X is less than y");
  //   } else if (x > y) {
  //     console.log("X is greater than y");
  //   } else {
  //     console.log("x is equal to y");
  //   }
  //   x > y ? console.log("X is greater than y") : console.log("X is less than or equal to y");

  // }

  // display<T>(arg: T): T {
  //   return arg;
  // }

  // show1() {
  //   // console.log("Hello");
  //   return "Hello World";
  // }

  // show2(): void {
  //   console.log("Hi");
  // }

  // show3(): number {
  //   console.log("89");
  //   return 12;
  // }

  // show4(): string {
  //   return "lkj"
  // }

  // show5(name: string) {
  //   console.log("Hello " + name);
  // }

  // show6(id: number, name: string) {
  //   console.log("ID " + id + " Name " + name);
  // }


// ------------------------- Class 5 Data --------------------------------

constructor() {// private _abc:abc
  // _abc.show1();
  //this.switchmethod();
  // this.forMethod();
  // this.whileMethod();
  // this.dowhileMethod();
  // this.foreachMethod();
  // this.greeting();
  // this.sum(10,20);
  // this.Greet("Hello", "Chandan Kumar");
  // // this.Greet("Hello");
  // this.Greet("Hello", "Ajeet", "Chandan", "Ajeet", "Chandan", "Ajeet", "Chandan", "Ajeet", "Chandan");
  // this.Greet1("Hello", "Ajeet", "Chandan", "Ajeet", "Chandan", "Ajeet", "Chandan", "Ajeet", "Chandan");
  this.show();
  this.sumnumber(40,90);
  this.print();
}

show=()=>{
  console.log("Hello World !!");
}

sumnumber=(a:number,b:number)=>{
  console.log(a+b);
}

print=()=>console.log("Hello Sahosoft");


// Greet(greeting: string, name: string) {
//   console.log(greeting + ' ' + name);
// }

//OPtaion Parameter
// Greet(greeting: string, name?: string) {

//   console.log(greeting + ' ' + name);
// }

// Greet(greeting: string, name?: string) {
//     if(name==undefined){
//       name="Pawan KUmar";
//     }
//   console.log(greeting + ' ' + name);
// }


//Default Parameter
// Greet(greeting: string, name: string="Ajeet Kumar") {
//   console.log(greeting + ' ' + name);
// }

//rest parameter

Greet(greeting: string, ...name: string[]) {
  console.log(greeting + ' ' + name.join('/'));
}

Greet1(greeting: string,str:string, ...name: string[]) {
  console.log(greeting + ' ' + name.join('/'));
}


// greeting = function () {
//   console.log("Hello World !!");
// }

// sum = function (x: number, y: number) {
//   console.log(x + y);
// }



switchmethod() {
  // let day: number = 20;
  // switch (day) {
  //   case 0:
  //     console.log("It is Sunday");
  //     break;
  //   case 1:
  //     console.log("It is Monday");
  //     break;
  //   case 2:
  //     console.log("It is Tuesday");
  //     break;
  //   case 3:
  //     console.log("It is Wednesday");
  //     break;
  //   case 4:
  //     console.log("It is Thursday");
  //     break;
  //   case 5:
  //     console.log("It is Friday");
  //     break;
  //   case 6:
  //     console.log("It is Saturday");
  //     break;
  //   default:
  //     console.log("No Such day exists");
  //     break;
  // }

  let x: number = 10, y: number = 5;
  switch (x - y) {
    case 0:
      console.log("Result : 0");
      break;
    case 5:
      console.log("Result : 5");
      break;

  }
}

forMethod() {
  // for (let i = 0; i <= 10; i++) {
  //   console.log(i);
  // }

  let arr1 = [10, 20, 30, 40, 50, 60];

  // for (let i = 0; i < arr1.length; i++) {
  //   console.log(arr1[i]);
  // }

  // for (let val of arr1) {
  //   console.log(val);
  // }

  for (let val in arr1) {
    // console.log(val);
    console.log(arr1[val]);
  }
}

whileMethod() {
  let i: number = 2;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

dowhileMethod() {
  let i: number = 20;
  do {
    console.log(i);
    i++
  } while (i < 10)
}

foreachMethod() {
  let num = [20, 30, 40, 50.60];
  num.forEach(function (value) {
    console.log(value);
  })
}
}
