import { Component, OnInit } from '@angular/core'
import { UsersDataService } from '../service/users-data.service'





@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  //regler le probleme de pointage data
  myData: any
  //variable dans laquelle mettre le client sélectionné
  selectedClient: any


  constructor(
    private myDataService: UsersDataService,
  ) {}

  ngOnInit(): void {
    this.myDataService.users().subscribe((result: any) => {
      this.myData = result.data

      console.log(this.myData)
    })
  }

  onSelected(client: any) {
    this.selectedClient = client
  }


  back() {
    this.selectedClient = false
  }


}

