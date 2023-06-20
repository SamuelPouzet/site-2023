import {Component, OnInit} from '@angular/core';
import {Musique} from "../Interfaces/musique";
import {MusiqueService} from "../Services/musique.service";

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})
export class MusiqueComponent implements OnInit {
  musiques: Musique[] = [];

  constructor(
    private musiqueService: MusiqueService
  ) {
  };

  ngOnInit() {
    this.getMusiques();
  }

  getMusiques() {
    this.musiqueService.getMusiques().subscribe(musiques=>this.musiques = musiques);
    console.log(this.musiques);
  }
}
