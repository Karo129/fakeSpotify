import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';
import { SharedModule } from 'src/app/data/shared/shared.module';


@NgModule({
  declarations: [
    TracksPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule {

  
 }
