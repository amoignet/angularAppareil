import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Ce service contient un array privé d'objets de type personnalisé  User
  // et un Subject pour émettre cet array.
  // La méthode  emitUsers()  déclenche ce Subject
  // et la méthode  addUser()  ajoute un objet  User  à l'array, puis déclenche le Subject.

  private users: User[] = [
    new User('Antoine', 'Moignet', 'antoinemoignet@gmail.com', 'Bière IPA', ['Snowboard, rando avec son amoureuse']),
    new User('Marine', 'Petit', 'petitm31@gmail.com', 'Thé', ['regarder des photos de puppies trop choupinou', 'et coder'])
   ];

  userSubject =  new Subject<User[]>();

  constructor() { }

  emitUsers(): void {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
