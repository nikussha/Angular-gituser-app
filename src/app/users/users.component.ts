import { SearchbuttonComponent } from './../searchbutton/searchbutton.component';
import { UsersService } from './../users.service';
import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../Users';
import { mdiTwitter } from '@mdi/js';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  data: Observable<User>;
  constructor(public serv: ThemeService, public userserv: UsersService) {
    this.data = this.userserv.sharedSubj as Observable<User>;
  }
  ngOnInit(): void {}
}
