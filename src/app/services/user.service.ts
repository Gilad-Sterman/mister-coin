import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return {
      name: 'Gilad Sterman',
      coins: 100,
      moves: []
    }
  }
}
