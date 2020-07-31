import { Component, OnInit } from '@angular/core';
import { faCookieBite, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  faCookieBite = faCookieBite;
  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  logoutAll(){
    this.user.logoutAll();
  }

}
