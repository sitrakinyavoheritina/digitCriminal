import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router, Params } from '@angular/router';



@Component({
  selector: 'app-user-police',
  templateUrl: './user-police.component.html',
  styleUrls: ['./user-police.component.css']
})
export class UserPoliceComponent implements OnInit {

	infosyId
	decision
	niveau_acte
	info_full
	name_acte
	show_detail
	ko
	resultat_user
 	full_info  = { 
		 	"listUser":[
			    {"stade":"3", "CIN":"2222",
			     	"user_detail": {
			     		"first_name" : "randrianarisoa sitraka",
			     		"name" : "niavo",
			     		"date_of_birth" : "11/03/2020",
			     		"sexe":'Masculin',
			     		"nationalite" : "Malagasy"
			    	},
			    	"liste_of_act" : [
			    		{"date_act" :"14/05/2020" ,
				    		"niveau_acte" : "délit ",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 14 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"17/05/2020" ,
				    		"niveau_acte" : "délit",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 17 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"19/05/2020" ,
				    		"niveau_acte" : "crime",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 19 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"30/05/2020" ,
				    		"niveau_acte" : "crime",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 30 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   		{"date_act" :"30/06/2020" ,
				    		"niveau_acte" : "contravention ",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 30 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
			    	]
			    },
			    {"stade":"1", "CIN":"3333",
			     	"user_detail": {
			     		"first_name" : "joseph",
			     		"name" : "RABE",
			     		"date_of_birth" : "22/10/2006",
			     		"sexe":'féminin',
			     		"nationalite" : "Malagasy"
			    	},
			    	"liste_of_act" : [
			    		{"date_act" :"22/04/2020" ,
				    		"niveau_acte" : "contravention",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 22 avril 2020 a paris",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"17/05/2020" ,
				    		"niveau_acte" : "contravention ",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 17 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"19/05/2020" ,
				    		"niveau_acte" : "contravention ",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 19 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"30/05/2020" ,
				    		"niveau_acte" : "contravention",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 30 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
			    	]
			    },
			    {"stade":"2", "CIN":"4444",
			     	"user_detail": {
			     		"first_name" : "dumper",
			     		"name" : "christian",
			     		"date_of_birth" : "11/03/2020",
			     		"sexe":'Masculin',
			     		"nationalite" : "Malagasy"
			    	},
			    	"liste_of_act" : [
			    		{"date_act" :"14/05/2020" ,
				    		"niveau_acte" : "délit",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 14 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"17/05/2020" ,
				    		"niveau_acte" : "délit",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 17 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		},
				   			{"date_act" :"19/05/2020" ,
				    		"niveau_acte" : "contravention",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 19 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		}
			    	]
			    },
			    {"stade":"1", "CIN":"5555",
			     	"user_detail": {
			     		"first_name" : "elyse",
			     		"name" : "flavien",
			     		"date_of_birth" : "11/03/2020",
			     		"sexe":'Masculin',
			     		"nationalite" : "Malagasy"
			    	},
			    	"liste_of_act" : [
			    		{"date_act" :"14/05/2020" ,
				    		"niveau_acte" : "contravention",
				    		"name_acte" : "vol a main armee",
				    		"info_full" : "vol a main armee le 14 mai 2020 a tana",
				    		"decision" : "vol a main armee"
				   		}
			    	]
			    }		    
			]
		}

  constructor( private router: Router
  	 ) {
  	 }

  ngOnInit() {
  }


  namerechercher
	research
	result_user
	short_info
	user_detail
	date_act
	date_acte
	cin_user
	stade
	ifvalidCin
	update : boolean = false
	up : boolean = true
	error
	resultArray : any = new Array()
	result


  search() {	 
		console.log(this.research)
		var recherche = this.research
		let info_user_by_cin = this.full_info.listUser
		  let infobycin = info_user_by_cin.filter(function(el){
			return(el.CIN === recherche );
			});
		console.log('186',infobycin)
		if (infobycin.length === 0) {
			console.log('ts azo ekene')
			this.ko = true
			this.ifvalidCin = false

		} else {
			this.ko = false
			this.ifvalidCin = true
			this.resultat_user = infobycin[0]
			console.log('azo ekene')
			this.cin_user = this.resultat_user.CIN
		  this.stade = this.resultat_user.stade
		  this.short_info = this.resultat_user.liste_of_act
		  this.user_detail = this.resultat_user.user_detail
		  this.date_acte = this.short_info
		}
	}

  logout() {
  	this.router.navigate(['/login'])
  }

}



 

