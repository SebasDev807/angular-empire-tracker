import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LogoComponent } from './components/logo/logo.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [HeaderComponent, SearchBoxComponent, LogoComponent],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports:[HeaderComponent]
})
export class SharedModule { }
