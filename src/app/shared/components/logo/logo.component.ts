import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-logo',
 template:`
  <div>
      <a href="#">
         <img [src]="imageUrl">
      </a>
   </div>
 `
})
export class LogoComponent {

  @Input()
  public imageUrl!:string;
}
