import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MUSIQUES} from "../MOCK/MusiqueMock";
import {Musique} from "../Interfaces/musique";

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  constructor() { }

  getMusiques():Observable<Musique[]>
  {
    return of(MUSIQUES);
  }
}
