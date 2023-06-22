import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {PartnertypesService} from "../Services/partnertypes.service";
import {PartnerType} from "../Interfaces/partner-type";
import {Partner} from "../Interfaces/partner";
import {PartnerService} from "../Services/partner.service";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  background: ThemePalette = undefined;
  types: PartnerType[] | undefined;
  activeType: PartnerType| undefined;

  partnerList: Partner[] = [];

  constructor(
    private partnerTypesService: PartnertypesService,
    private partnerService: PartnerService
  )
  {}

  ngOnInit()
  {
    this.types = this.partnerTypesService.getTypes();
    this.activeType = this.types[0];
    this.getPartnerList();
  }

  changeType(type: PartnerType)
  {
    this.activeType = type;
    this.getPartnerList();
  }

  getPartnerList()
  {
    console.log(this.activeType);
    if(this.activeType) {
      this.partnerList = this.partnerService.getPartnersByType(this.activeType);
    }
  }
}
