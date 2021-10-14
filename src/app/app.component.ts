import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daily';
  today = window.Date.now.call;
  goals = ["Daily Changes","Detox","Healthy lifestyle","Mau Time","Kizzi Time","Happda Time","Dota Time","Fixed Income","Growth Funds","Interview Preperation"];
}
