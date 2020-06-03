import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private af: AngularFireDatabase) { 
  		this.getsuerAll()
  }


    getsuerAll() {
  	console.log('sdgfgdf')
    return new Promise((resolve,reject) =>{
      const data: firebase.database.Reference = firebase.database().ref('user');
        data.on('value', dataSnapshot =>{
          resolve(dataSnapshot.val())
        })
      }) 
  }
}
