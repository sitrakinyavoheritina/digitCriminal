import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent  {
  public show_btn:boolean
  research: any ;
  nameUser : boolean; 
  namerechercher
  name
  credential
  user_police : boolean
  user_commissaire : boolean
  not_crime : boolean
  name_user
  
  constructor(public router: Router) {
  	let credential = sessionStorage.getItem('credential');
  	console.log(credential)
  	this.credential = JSON.parse(credential)
  	this.name_user = this.credential.name
   }

  search() {
  	let cin = "1234"
  	this.namerechercher = this.research
  	console.log(this.research)
  	if (this.namerechercher == cin ) {
  		this.nameUser = true;
  		this.name = "sitraka";
  		this.verifytypeUser()
  	}

  	else {
  		this.nameUser = true;
  		this.name = "terrorste";
  		this.verifytypeUser()
  		this.not_crime = true;
  	}
  }

  verifytypeUser() {
  	if (this.name_user == 'police') {
  		this.user_police = true
  	}

  	else if (this.name_user == 'commissaire' || this.name_user == 'president') {
  		this.user_commissaire = true
  		console.log("com")
  	}
  }
   user_status
   user_detail :boolean = false
   hide_btn
 

  hide_detail() {
  	
  	if (this.user_detail == false) {
  		this.user_detail = true
  	}
  	else {
  		this.user_detail = false

  	}
  }

  logout() {
  	this.router.navigate(['/login'])
  }


}
