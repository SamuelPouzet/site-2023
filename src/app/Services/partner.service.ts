import {Injectable} from '@angular/core';
import {Partner} from "../Interfaces/partner";
import {PARTNERS} from "../MOCK/PartnersMock";
import {PartnerType} from "../Interfaces/partner-type";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  constructor() { }

  getPartnersByType(type: PartnerType): Partner[]
  {
    return PARTNERS.filter(p => p.type.id === type.id);
  }
}
