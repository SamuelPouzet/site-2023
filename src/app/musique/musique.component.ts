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
  currentMusique: Musique | undefined;
  currentVideoId: string | undefined |null;

  constructor(
    private musiqueService: MusiqueService
  ) {
  };

  ngOnInit() {
    this.getMusiques();
  }

  selectMusique(musique: Musique)
  {
    this.currentMusique = musique;
  }

  getMusiques() {
    this.musiqueService.getMusiques().subscribe(musiques=>this.musiques = musiques);
  }

  selectVideo(musique: Musique) {
    const params = new URL(musique.url).searchParams;
    this.currentVideoId = params.get('v');
  }

}
