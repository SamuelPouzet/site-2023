import {PartnerType} from "./partner-type";

export interface Partner {
  id: number;
  type: PartnerType;
  name: string;
  content: string;
  url: string;
  owner: string;
}
