import { UserService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;

  constructor(private userService: UserService) { }

}
