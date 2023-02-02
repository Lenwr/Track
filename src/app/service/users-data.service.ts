import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = environment.apiUrl + '/clients'

  userUrl = environment.apiUrl + '/clients:2'

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
