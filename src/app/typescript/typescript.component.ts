import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})

export class TypescriptComponent {
  
  num1: number = 10;

  age1: number = 20;
  age2 = 30;

  name1 = "Shailendra";
  name2: string = "Lokendra";
  name3 = "";
  name4 = '';

  isdone = true;
  isdone2: boolean = false;

  employee:{
    id:number;
    name:string
  }


  constructor() {

    this.employee={
      id: 101,
      name:"Dharmendra"
    }

    console.log(this.employee)

    // this.age1="hkh";
    // this.age2="jlkj";
    // this.age1=true;
    // this.age2=false;

    // this.age1=40;
    // this.age2=45;
    // this.age1="123";

    // console.log(this.age1);
    // console.log(this.age2);

    // console.log(typeof(this.age1));
    // console.log(typeof(this.age2));

    // this.name1=12;
    // this.name2=343;
    // this.name3=89;
    // this.name4=67;

    // console.log(typeof(this.name1));
    // console.log(typeof(this.name2));
    // console.log(typeof(this.name3));
    // console.log(typeof(this.name4));

    // this.isdone=56;
    // this.isdone2=";lkj;l";
    // this.isdone=false;

    // console.log(typeof(this.isdone));
    // console.log(typeof(this.isdone2));

    //this.showdata("Shailendra ",500);
    // this.variablemethod();

    // this.numberMethod();
    // this.stringMethod();
    // this.booleanMethod();
    // this.show();
    // console.log(this.show);

    // this.show2();
    // console.log(this.show2);

    // this.show3();
    // console.log(this.show3);

    // this.show4();
    // console.log(this.show4);

    // this.nullMethod();
    // this.anyMethod();
    // this.sum(10, 20);
    // this.sum("10","20");
    // this.sum("hello","hi");
    // this.arrayMethod();
    this.toupleMethod();

}

variablemethod() {
  // let num2: number = 20;

  // if (this.num1 < num2) {
  //   let num3: number = 30;
  //    var Num6:number=60;
  //    let num6:number=60;
  //    var nUm6:number=60;
  //    var nuM6:number=60;
  //    var num6:number=60;

  // }

  // while (num2 < num3) {
  //   let num4: number = 40;
  //   let num3: number = 30;
  // }

  // console.log(this.num1);
  // console.log(num2);
  // console.log(num3);
  // console.log(num4);

  // console.log(num7);
  // let num7: number = 70;
  //this.sum(40, 50);

  // let num8:number=80;
  // num8=90;

  let num8:number;
  num8=80;

  // const num10:number=100;
  // num10=90;

  const num10:number=90;
  
}


// sum(a: number, b: number) {
//   let a: number = 20;
//   console.log(a + b);
// }

// showdata(id: number, name: string) {
//   console.log("ID= " + id + "Name= " + name);
// }

// showdata(id: number, name: string) {
//   console.log("ID= " + id + "Name= " + name);
// }

toupleMethod() {
  let list: [number, string, number, boolean] = [100, "Dharmendra", 10, true];

  console.log(list);
  console.log(typeof(list));

  var empid: number = 101;
  var empname: string = "Shailendra";

  let employee: [number, string] = [empid, empname];

  employee = [102, "Lokendra"];
  // employee=[103];

  employee.push(103, "Shailu");
  employee.push("Monu", 10);
  employee.push(105);
  employee.push(106, "Bittu", 120, "kjhjkl", "jhkljlk");

  console.log(employee);
  // console.log(employee[1]);

  let person: [number, string][] = [[1, "Chandan"], [2, "Ajeet"], [3, "Rahul"]];

  console.log(person);

  console.log(person[2][1]);



}

arrayMethod() {
  let list1: number[] = [1, 2, 3, 4, 4];
  let list2: string[] = ["Ram", "Shyam"];

  let list3: Array<number> = [1, 2, 3, 4, 56, 7, 88];

  let list4: any[] = ["hello", 1, "hj", true];

  console.log(list1);
  console.log(list2);
  console.log(list3);

  console.log(typeof (list1));
  console.log(typeof (list2));
  console.log(typeof (list3));

  console.log(list2[1]);

  list2.push("Mohan");
  console.log(list2);


}

sum(a: number, b: any) {
  console.log(a + b);
}

anyMethod() {
  let a: any;

  console.log(typeof (a));

  a = 10;
  a = "Hello";
  a = true;
  a = 100;

  console.log(typeof (a));
}

// undefinedMethod() {
//   let num1: undefined;
//   let num2 = undefined;

//   // num1=12;
//   // num1="jk";

//   num1 = null;
//   num1 = undefined;

//   num2 = 12;
//   num2 = "hello";
//   num2 = true;

// }

nullMethod() {
  let num1: null;
  let num2 = null;

  // num1=12;
  // num1=";lk;";
  num1 = null;
  // num1 = undefined;

  num2 = 12;
  num2 = "kjkl";
  num2 = true;

  // console.log(typeof(num1));
  console.log(typeof(num2));
}

voidMethod() {
  let num1: void;

  // num1=12;
  // num1="Hello";
  // num1=true;

  // num1 = null;
  num1 = undefined;
}

show() {
  //console.log("Hello");
  return "Hello";
}

show2(): void {
  // return "jkh";
  console.log("Hi");
}

show3(): number {
  return 12;
}

show4(): string {
  return "12";
}

numberMethod() {
  let num1 = 10;
  let num2: number = 20;
  let num3: number = 10.20;
  let num4 = 20.30;

  let num5: number;
  num5 = 90;

  console.log(typeof (num5));

  console.log(num1);
  console.log(num2);
  console.log(num3);
  console.log(num4);

  console.log(typeof (num1));
  console.log(typeof (num2));
  console.log(typeof (num3));
  console.log(typeof (num4));
}

stringMethod() {
  let str1 = "Chandan Kumar";
  let str2: string = "Ajeet Kumar";
  let str3 = "";
  let str4 = '';

  console.log(typeof (str1));
  console.log(typeof (str2));
  console.log(typeof (str3));
  console.log(typeof (str4));

  let empname: string = "Shailendra Jain";
  let empdept: string = "Software Development";
  //before ES6
  let output1: string = empname + " works in the " + empdept + " department.";

  //After ES6
  let output2: string = `${empname} works in the ${empdept} department`;


  console.log(output1);
  console.log(output2);
}


booleanMethod() {
  let isdone = true;
  let isdone2: boolean = false;

  // isdone=12;
  // isdone2="true";
  // isdone2=false;

  console.log(typeof (isdone));
  console.log(typeof (isdone2));
}

}