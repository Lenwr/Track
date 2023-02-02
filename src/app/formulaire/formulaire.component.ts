import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { UsersDataService } from '../service/users-data.service'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit, OnDestroy {
  sub = new Subscription()

  users: any

  constructor(private userData: UsersDataService) {}

  ngOnInit(): void {
    this.sub.add(
      this.userData.users().subscribe((data) => {
        this.users = data
      }),
    )
  }

  getUsersFormData(formData: any) {
    //console.warn(data)
    //toujours mettre la data dans un objet avant l envoi vers strapi
    this.userData.saveUser({ data: formData }).subscribe((result) => {
      console.log(result)
    })
  }

  logFormData(val: any) {
    console.log(val)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
