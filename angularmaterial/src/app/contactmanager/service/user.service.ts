import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //we dont expose our datastore to user so we add Behaviour subject. Compponents will be able to subscribe to.
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  }

  constructor(private http: HttpClient) {
    //initialize datastore
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  // this property will exposed to all the components
  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id)
  }

  loadAll() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<User[]>(userUrl)
    .subscribe( data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);  // to publish data to all our subcribed compnenents
    },error => {
      console.log("Failed to fetch users");
    })
  }

}
