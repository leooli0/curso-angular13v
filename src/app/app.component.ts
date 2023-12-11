import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Leo"
  userData = {
    email: "leo@gmail.com",
    role: "Admin"
  }

  title = 'curso-angular13';
}
