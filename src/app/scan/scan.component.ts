import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // latest snapshot
    public webcamImage: WebcamImage | undefined

    handleImage(webcamImage: WebcamImage) {
      this.webcamImage = webcamImage
    }

}
