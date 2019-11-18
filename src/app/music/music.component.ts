import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MusicService } from './music.service';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
  providers: [MusicService]
})
export class MusicComponent implements OnInit {
  message: string;
  music: any;
  musicFound: boolean;
  musicPoster: string;


  constructor(
    private musicService: MusicService,
  ) { }

  ngOnInit() {
  }
  searchMusic(term: string): void {
    this.musicService.search(term).subscribe(res => {
      if (res.Response === 'True') {
        this.music = res
        if (this.music.Poster != 'N/A') {
          this.musicPoster = this.music.Poster
        } else {
          this.musicPoster = ''
        }
        this.musicFound = true
      } else {
        this.musicFound = false
        this.message = 'No music was found that matched your search.'
      }
    });
    console.log(term, this.music)
  }

}
