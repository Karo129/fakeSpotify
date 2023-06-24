import { Injectable, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')

  constructor() { 
    this.audio = new Audio()
    this.trackInfo$.subscribe(responseOk => {
      if(responseOk){
   
        this.setAudio(responseOk);
      }
    })
    this.listenAllEvents();

    private listenAllEvents(): void{
      this.audio.addEventListener('timeupdate', this.calculateTime, false
      );
    }
    private calculateTime = () => {
      console.log('Disparando event');
      const {duration, currentTime} = this.audio;
      console.log([duration, currentTime]);
      this.setTimeElapsed(currentTime);
      this.setTimeRamaining(currentTime, duration);
    }

    public setTimeElapsed(currentTime: number): void {
      let seconds = Math.floor(currentTime % 60);
      let minutes = Math.floor((currentTime /60) % 60);

      const displaySeconds = (seconds <10) ? `0${seconds}`: seconds;
      const displayMinutes = (minutes <10) ? `0${minutes}` : minutes;

      const displayFormat = `${displayMinutes}: ${displaySeconds}`
      this.timeElapsed$.next(displayFormat);
    }


    private setTimeRamaining (currentTime: number, duration: number): void {
      let timeLeft = duration - currentTime;

      let seconds = Math.floor(timeLeft % 60);
      let minutes = Math.floor((timeLeft /60) % 60);

      const displaySeconds = (seconds <10) ? `0${seconds}`: seconds;
      const displayMinutes = (minutes <10) ? `0${minutes}` : minutes;

      const displayFormat = `${displayMinutes}: ${displaySeconds}`
      this.timeRemaining$.next(displayFormat);

    }


    public setAudio(track: TrackModel): void {
      console.log('', track);
      this.audio.src = track.url;
      this.audio.play()
    }


    }

   
