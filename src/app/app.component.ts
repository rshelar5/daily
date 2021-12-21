import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'daily';
  file = null;

  fileselected(event: any) {
    var file = event.target.files[0];
    var fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = (event) => {
      console.log(event.target?.result);
    };
  }
}
