import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';


@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {
  v1: any
  v2: any
  v3: any
  punitaire:any
  vol:any
  constructor() { }

  ngOnInit(): void {

  }

volume(){
 let volume = document.getElementById("volume") as HTMLInputElement
  let val1 = document.getElementById("valeur1") as HTMLInputElement
  let val2 = document.getElementById("valeur2") as HTMLInputElement
  let val3 = document.getElementById("valeur3") as HTMLInputElement
  let pu = document.getElementById("pu") as HTMLInputElement

  this.v1 = val1.value
  this.v2 = val2.value
  this.v3 = val3.value
  this.punitaire = pu.value

    this.vol = this.v1 * this.v2 * this.v3 * this.punitaire
 volume.value = this.vol



  }
}
