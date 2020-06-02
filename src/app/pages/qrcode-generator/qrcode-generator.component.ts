import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';


@Component({
  selector: 'app-qrcode-generator',
  templateUrl: './qrcode-generator.component.html',
  styleUrls: ['./qrcode-generator.component.css']
})
export class QrcodeGeneratorComponent  {
public myAngularxQrCode: string = null;
name
adress
date_birth
QrCodedata
  constructor() { 
	this.myAngularxQrCode = 'Your QR code data string';
  }
  sendinfoInDataBase() {
    let QrCode = {
    	name:this.name,
    	adress:this.adress,
			date_birth:this.date_birth
    } 

    this.QrCodedata = this.name;
  }

}
