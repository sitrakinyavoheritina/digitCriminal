import { Component, OnInit } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { FirebaseService } from '../../services/firebase.service'
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';


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
id_user
  constructor(public af : AngularFireDatabase) { 
	this.myAngularxQrCode = 'Your QR code data string';
  }
  sendinfoInDataBase() {
    let QrCode = {
    	id_user:this.id_user,
    	adress:this.adress,
			name:this.name
    } 
    this.QrCodedata = this.name;
    this.getsuerAll();
    this.adduser(this.id_user,this.adress,this.name)
  }

  getsuerAll() {
    console.log('sdgfgdf')
    return new Promise((resolve,reject) =>{
      const data: firebase.database.Reference = firebase.database().ref('user');
        data.on('value', dataSnapshot =>{
          console.log(dataSnapshot.val())
          resolve(dataSnapshot.val())
        })
      }) 
  }

  adduser(id ,addr, name) {
    return new Promise((resolve,reject) => {     
      const data: firebase.database.Reference = firebase.database().ref('user');
        let dataList = {
        [id]:{
          adress :addr,
          name:name
        },
      };
      data.update(dataList).then(success=> {
        // this.successfullyToast("Le compte a été enregistré avec succès")
        resolve(success)
        }).catch( error => {
          reject(error)
        })
    }) 
  }
}
