import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
  private user: User;

  constructor() { }

  userLoggedIn(newUser: User): void{
    if (newUser){
      if (this.user) console.log('Somehow two users are logged in...');

      this.user = newUser;
    }
  }

  userLoggedOut(): void{
    this.user = undefined;
  }

  isUserLoggedIn(): boolean{
    if (this.user && this.user.Token) return true;
    return false;
  }

  getUserName(): string{
    return this.user.Username;
  }
}
