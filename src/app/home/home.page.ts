import { AlertController} from '@ionic/angular';
import { PersonsService } from './../services/persons.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private personsService: PersonsService, private alertController: AlertController) {}

  persons : any = []
  getAllPersons() {
    this.personsService.getAllPersons().subscribe(data => {
    this.persons = data;
    })
  }
  ngOnInit() {
    this.getAllPersons();
  }

      async deletePerson(personID: number) {
        const alert = await this.alertController.create({
          header: 'Confirm Deletion',
          message: 'Are you sure you want to delete this person?',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Delete cancelled');
              }
            }, {
              text: 'Delete',
              handler: () => {
                this.personsService.deletePerson(personID).subscribe(data => {
                  this.ngOnInit();
                });
              }
            }
          ]
        });
      
        await alert.present();
      }
    }
