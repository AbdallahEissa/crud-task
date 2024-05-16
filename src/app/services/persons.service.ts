import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(private http: HttpClient) {}


  getAllPersons(){
    const url = 'http://mohagado-001-site1.itempurl.com/Person/getAllPersons';
    return this.http.get( url );
  }

  deletePerson(personID : number){
    const url = 'http://mohagado-001-site1.itempurl.com/Person/deletePerson/?personID='+personID;
    return this.http.get(url);
  }

  addPerson(person : any) {
    const url = 'http://mohagado-001-site1.itempurl.com/Person/addPerson';
    return this.http.post( url , person);
  }

  updatePerson(person : any) {
    const url = 'http://mohagado-001-site1.itempurl.com/Person/editPerson';
    return this.http.post( url , person);
  }

  getPersonById(personID : number) {
    const url = 'http://mohagado-001-site1.itempurl.com/Person/getPersonById/?personID='+personID;
    return this.http.get( url );
  }
}
