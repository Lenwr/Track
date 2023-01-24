import { Component, OnInit } from '@angular/core'
import { SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css'],
})
export class QrCodeComponent implements OnInit {
  url: SafeUrl = ''

  constructor() {}

  ngOnInit(): void {}

  onCodeChange(url: SafeUrl) {
    this.url = url
    console.log(url)
  }
}
