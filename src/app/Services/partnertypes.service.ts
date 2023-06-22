import { Injectable } from '@angular/core';
import {PartnerType} from "../Interfaces/partner-type";
import {PARTNERS} from "../MOCK/PartnerTypeMock";

@Injectable({
  providedIn: 'root'
})
export class PartnertypesService {

  constructor() { }

  getTypes(): PartnerType[]
  {
    return PARTNERS;
  }
}
