import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dog } from "./entities/dog";
import { Sitter } from "./entities/sitter";

const apiV1 = "http://angular2api1.azurewebsites.net/api/internships";
const apiV2 = "http://angular2api2.azurewebsites.net/api/internships";
const options = {
  headers: new HttpHeaders ({ 
    'Access-Control-Allow-Origin':'*'
})};

//CRUD FUNCTIONALITIES
//API

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }

  //DOG
  updateDog(dog: Dog) {
    /* return this.http.put(`${api1}/update${dog.id}`, options); */
  }

  deleteDog(dog: Dog) {
    return this.http.post(`${apiV1}/delete/${dog.id}`, options);
  }

  createDog(dog: Dog) {
    return this.http.post(`${apiV2}`, dog, options);
  }

  getDogs() {
    return this.http.get(`${apiV1}/getall`, options);
  }

  //SITTER
  updateSitter() {
  }

  deleteSitter(sitter: Sitter) {
    return this.http.post(`${apiV1}/delete/${sitter.id}`, options);
  }

  createSitter(sitter: Sitter) {
    return this.http.post(`${apiV2}`, sitter, options);
  }

  getSitters() {
    return this.http.get(`${apiV1}/getall`, options);
  }
}