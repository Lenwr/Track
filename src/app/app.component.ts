import { Component } from '@angular/core'
import { WebcamImage } from 'ngx-webcam'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JeSuisMesColis'

  // latest snapshot
  public webcamImage: WebcamImage | undefined

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage
  }
}
