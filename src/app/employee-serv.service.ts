import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServService {

  private employees = [
    { id: 1, name: 'Shailendra Jain' },
    { id: 2, name: 'Shailu Jain' },
    { id: 3, name: 'Dharmendra Jain' },
    { id: 4, name: 'Lokendra Jain' },
    { id: 5, name: 'Monu Jain' },
    { id: 6, name: 'Bittu Jain' },
  ]

  constructor() { }

  getallemployees():Promise<any>{
    return new Promise(resolve=>resolve(this.employees));
  }
}
