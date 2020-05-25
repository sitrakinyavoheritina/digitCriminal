import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router, Params } from '@angular/router';
import { FormBuilder, Validators , FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup ;
  passwd : any 
  name: any
  Form_invalid
  credential_invalid
	password
  constructor(private formBuilder: FormBuilder,
  	public router: Router
  ) {
      
 
  }

  login() {
  	// if (this.loginForm.valid) {
   		this.passwd = this.password;  
        this.name = this.name;
		      let credential  = {
		        name: this.name,
		        password: this.passwd 
		      };
 						this.savecredential(credential)
		     if ( this.name == "police" && this.passwd == "police") {
		     	console.log("police")
  	      this.router.navigate(['/police'])
		     }
		     else if (this.name == "commissaire" && this.passwd == "commissaire") {
		     	console.log("commissaire")
  				this.router.navigate(['/commissaire'])
		     }

		     else if ( this.name == "president" && this.passwd == "president") {
  				this.router.navigate(['/president'])
		     	console.log("president")
		     }

		     else {
		     	console.log("error")
				  this.credential_invalid = true

		     }



  	// }
  	// else {
  	// 	console.log("invalid")
  	// 	this.Form_invalid = true
  	// }
  }

  logine () {
  	 this.router.navigate(['/police'])

  }

  savecredential(credential) {
  	sessionStorage.setItem('credential', JSON.stringify(credential));
  }
}

