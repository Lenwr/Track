import { Component, OnInit} from '@angular/core'
import {Router} from "@angular/router";
import {UsersDataService} from "../service/users-data.service";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements OnInit {

  scanResult : any
  user: any
  redirectUser: any
  constructor(private router: Router,
              private dataService: UsersDataService) {}

  ngOnInit(): void {
    this.dataService.users().subscribe((result)=>{
      this.user = result
    })
  }

  onCodeResult(Result:string){
    this.scanResult=Result
    console.log(this.scanResult)
    this.redirectUser = this.user.data[this.scanResult - 1]
    console.log(this.redirectUser)

  }
  reinitialiser() {
    this.scanResult = !this.scanResult
  }

}
