import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Client } from '../interface/client'

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'http://localhost:1337/api/clients'

  userUrl = 'http://localhost:1337/api/clients:id'

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url)
  }

  user() {
    return this.http.get(this.userUrl)
  }

  saveUser(data: any) {
    return this.http.post<any>(this.url, data)
  }
}
