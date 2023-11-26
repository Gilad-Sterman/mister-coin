import { Injectable, inject } from '@angular/core';
import { User } from './user.model';
import { Observable, BehaviorSubject, throwError, from, tap, retry, catchError, take } from 'rxjs';
import { Contact } from './contact.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loggedInUser$ = new BehaviorSubject<User>({ name: '', coins: 100, moves: [] })
  public loggedInUser$ = this._loggedInUser$.asObservable()
  myUser: User | null = null

  constructor() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedUser') || 'null')
    if (loggedInUser) this._loggedInUser$.next(loggedInUser)
  }

  getNewUser(name: string) {
    return {
      name,
      coins: 100,
      moves: []
    }
  }

  signUp(name: string) {
    const newUser = this.getNewUser(name)
    this._loggedInUser$.next(newUser)
    this.myUser = newUser
    localStorage.setItem('loggedUser', JSON.stringify(newUser))
  }

  logOut() {
    this._loggedInUser$.next({ name: '', coins: 100, moves: [] })
    this.myUser = null
    localStorage.removeItem('loggedUser')
  }

  addMove(contact: Contact, amount: number) {
    const newMove = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount
    }
    const loggedInUser = JSON.parse(localStorage.getItem('loggedUser') || 'null')
    if (!loggedInUser) return
    loggedInUser.moves.push(newMove)
    loggedInUser.coins = loggedInUser.coins - amount
    this._loggedInUser$.next(loggedInUser)
    localStorage.setItem('loggedUser', JSON.stringify(loggedInUser))
  }
}
