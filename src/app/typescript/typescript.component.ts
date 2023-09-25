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
    this.variablemethod();


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


}