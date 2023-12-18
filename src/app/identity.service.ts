import { Injectable } from '@angular/core';
import axios from 'axios';
import { PersonModel } from './models/PersonModel';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public async getData(): Promise<PersonModel>{
    let person: PersonModel

    let res = await axios.get('https://api.randomuser.me/')
    person = new PersonModel(
      res.data.results[0].name.first,
      res.data.results[0].name.last,
      res.data.results[0].email
    )
    return person
  }

  constructor() { }
}
