import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.page.html',
  styleUrls: ['./form-edit.page.scss'],
})
export class FormEditPage implements OnInit {

  constructor(private personsService: PersonsService, private router : Router, private route : ActivatedRoute) {}

  personID : number = 0;
  person : any = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personID = params['personID'];
    });

    this.personsService.getPersonById(this.personID).subscribe(data => {
      this.person = data;
      
    });
  }

  updatePerson() {
    this.personsService.updatePerson(this.person).subscribe(data => {
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    })
  }
}
