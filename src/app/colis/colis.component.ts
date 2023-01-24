import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {

  myData: any;

  constructor(private dataService: UsersDataService) { }

  ngOnInit(): void {
    this.dataService.user().subscribe((result)=>{
      this.myData = result
    })
  }

}
