import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StarWarsDataService } from './services/star-wars-data.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  providers:[
    StarWarsDataService,
    provideHttpClient(
      withFetch()
    )
  ],
  imports: [
    CommonModule,
    

  ],
  exports:[
    MainPageComponent,
  ]
})
export class HomeModule { }
