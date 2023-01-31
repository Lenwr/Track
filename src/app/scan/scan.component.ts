import { Component, OnInit, ViewChild } from '@angular/core'
import { ZXingScannerComponent } from '@zxing/ngx-scanner'
import { Result } from '@zxing/library'

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements OnInit {
 
  scanResult : any
  constructor() {}

  ngOnInit(): void {
  }

  onCodeResult(Result:string){
    this.scanResult=Result
  }

}
