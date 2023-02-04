import { Component, Input, OnInit } from '@angular/core'
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  @Input() client?: any
  qr: boolean = false

  constructor(private router: Router) {}

  ngOnInit(): void {}

  generer(client: any) {
    this.qr = true
  }
  reset() {
    this.qr = false
  }
  back(){
    this.router.navigate(['colis'])
  }
}
