import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "./entities/dog";
import { Sitter } from "./entities/sitter";

//CRUD FUNCTIONALITIES
//API

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
   /*  const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
      })
    }; */
  }

  //DOG
  updateDog() {
  }

  deleteDog(dog: Dog) {
    return this.http.delete("http://angular2api2.azurewebsites.net/api/internships/" + dog.id);
  }

  createDog(dog: Dog) {
      return this.http.post("http://angular2api2.azurewebsites.net/api/internships", dog);
  }

  getDogs() {
    return this.http.get("http://angular2api1.azurewebsites.net/api/internships/getall");
  }

  //SITTER
  updateSitter() {
  }

  deleteSitter(sitter: Sitter) {
    return this.http.delete("http://angular2api2.azurewebsites.net/api/internships/" + sitter.id);
  }

  createSitter(sitter: Sitter) {
    return this.http.post("http://angular2api2.azurewebsites.net/api/internships", sitter);
  }

  getSitters() {
    return this.http.get("http://angular2api1.azurewebsites.net/api/internships/getall");
  }
}