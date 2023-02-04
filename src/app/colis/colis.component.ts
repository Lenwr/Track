import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';


@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {
  DATA: any
  constructor(private myDataService: UsersDataService) { }

  ngOnInit(): void {
    this.myDataService.users().subscribe((result: any) => {
      this.DATA = result.data
      console.log(this.DATA)
    })
  }

  displayedColumns: string[] = ['nom', 'prenom','addresse', 'telephone'];


}
