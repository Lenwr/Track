import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
})
export class ClientDetailsComponent implements OnInit {
  @Input() client?: any
  constructor() {}

  ngOnInit(): void {}

  
}
