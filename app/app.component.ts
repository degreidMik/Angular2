import { Component, OnInit } from '@angular/core';

@Component({
   
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent  {
   hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
  
}

export class Hero {
    id:number;
    name:string;
}