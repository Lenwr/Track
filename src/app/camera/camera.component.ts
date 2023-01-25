import { Component, OnInit } from '@angular/core'
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam'
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  cameraExist = true
  showWebcam = true
  errors : WebcamInitError[]=[];
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';
  constructor() {}

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then((MediaDevices: MediaDeviceInfo[])=> {
      this.cameraExist = MediaDevices && MediaDevices.length > 0 ; 
    })
  }

  
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
    console.info('got webcam image', this.sysImage);
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }
  get triggerObservable():Observable<void>{
    return this.trigger.asObservable();
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage
  }

  takeSnapShot():void {
    this.trigger.next;
  } 
  turnWebcam(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);

  }
  onOffCamera() {
    this.showWebcam = !this.showWebcam
  }
}
