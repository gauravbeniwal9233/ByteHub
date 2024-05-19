import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Name1Component } from "./name1/name1.component";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from "./views/login/login.component"; 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, Name1Component, MatSlideToggleModule, MatButtonModule, LoginComponent]
})
export class AppComponent {
  title = 'myapp-52';
}
