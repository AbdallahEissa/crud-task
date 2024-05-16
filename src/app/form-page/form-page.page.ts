import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.page.html',
  styleUrls: ['./form-page.page.scss'],
})
export class FormPagePage implements OnInit {

  constructor(private personsService: PersonsService, private router : Router) {}

  name? : string;
  age? : number;
  nationalityID? : number;
  birthDate? : string;

  addPerson() {
    const person = {
      name : this.name,
      age : this.age,
      nationalityID : this.nationalityID,
      birthDate : this.birthDate
    }
    this.personsService.addPerson(person).subscribe(data => {
      console.log("added");
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      })
    })
  }
  ngOnInit() {

  } 
  

}
