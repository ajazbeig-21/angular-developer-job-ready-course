import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'begineer-tutorial-angular';
  city : string = "Pune City";

  isLoggedIn : boolean = true;
}
