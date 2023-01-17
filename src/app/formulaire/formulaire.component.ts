import { Component, OnInit } from '@angular/core'
import { Client } from '../interface/client'
import { UsersDataService } from '../service/users-data.service'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent {
  users: any

  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      this.users = data
    })
  }

  getUsersFormData(data: any) {
    console.warn(data)
    this.userData.saveUser(data).subscribe((result) => {
      console.warn(result)
    })
  }
}
