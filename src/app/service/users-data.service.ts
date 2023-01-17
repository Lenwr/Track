import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Client } from '../interface/client'

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'http://localhost:1337/api/clients'
  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url)
  }
  saveUser(data: Client) {
    return this.http.post(this.url, data)
  }
}
