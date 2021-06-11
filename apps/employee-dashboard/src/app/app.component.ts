import { Component } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'razroo-fully-architected-dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Razroo | Fully Architected Employee Dashboard';
 faBell = faBell;
 faQuestionCircle = faQuestionCircle; 
 faUserCircle = faUserCircle
}
