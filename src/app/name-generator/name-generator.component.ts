import { Component } from '@angular/core';
import { IdentityService } from '../identity.service';
import { PersonModel } from '../models/PersonModel';

@Component({
  selector: 'name-generator',
  standalone: true,
  imports: [],
  templateUrl: './name-generator.component.html',
  styleUrl: './name-generator.component.css'
})
export class NameGeneratorComponent {

  private idService: IdentityService
  public generatedName?: PersonModel

  async generateName(){
    this.generatedName = await this.idService.getData() 
  }

  constructor(identityService: IdentityService){
    this.idService = identityService
  }
}


