import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList = [
    {
      name: 'BEBE (Official)'
    },
    {
      name: 'BEBE (Official)'
    },
    {
      name: 'BEBE (Official)'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
