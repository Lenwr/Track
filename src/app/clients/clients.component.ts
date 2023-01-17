import { Component, OnInit } from '@angular/core'
import { Data } from '../interface/data'
import { MyDataService } from '../service/my-data.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  //regler le probleme de pointage data
  myData: any
  constructor(private myDataService: MyDataService) {}

  ngOnInit(): void {
    this.myDataService.getData().subscribe((result: any) => {
      this.myData = result.data
      console.log(this.myData)
    })
  }
}
