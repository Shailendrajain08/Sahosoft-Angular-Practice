import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getmessage():Promise<string>{
    let _message="Welcome to Sanmati Technologies..";
   //return _message;

  //  return new Promise(resolve=>resolve(_message));

  //delay 3 second
    return new Promise(resolve=>{
      setTimeout(() => resolve(_message),3000);
    })

  }
}
