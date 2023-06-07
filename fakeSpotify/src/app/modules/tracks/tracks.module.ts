import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';


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
