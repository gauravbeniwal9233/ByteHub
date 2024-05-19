import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    imports: [HeaderComponent, RouterOutlet]
})
export class DashboardComponent {

}
