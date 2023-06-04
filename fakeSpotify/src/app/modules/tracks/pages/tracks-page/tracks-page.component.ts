import { Component, OnDestroy, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel>= []
  tracksRandom: Array<TrackModel>= []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TracksService) { }

  ngOnInit(): void {
   const observer1$ = this.trackService.dataTracksTrending$
   .subscribe(response => {
    this.tracksTrending = response;
    console.log('Canciones trending', response);
   })

   const observer2$ = this.trackService.dataTracksRandom$
   .subscribe(response => {
    this.tracksRandom = [...this.tracksRandom, ...response];
    console.log('Canciones random entrando...', response);
   })



   this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
