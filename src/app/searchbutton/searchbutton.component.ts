import { ThemeService } from './../theme.service';
import { Observable, Subject, Subscriber, tap } from 'rxjs';
import { UsersService } from './../users.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../Users';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-searchbutton',
  templateUrl: './searchbutton.component.html',
  styleUrls: ['./searchbutton.component.scss'],
})
export class SearchbuttonComponent implements OnInit {
  errormsg: string = '';
  user: FormControl = new FormControl('', Validators.required);
  constructor(private serv: UsersService, public theme: ThemeService) {}
  ngOnInit(): void {}
  sendrequest(e: Event) {
    e.preventDefault();
    if (this.user.value) {
      let user = this.user.value;
      this.serv.get(user).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          error.message = "User doesn't exist";
          this.errormsg = error.message;
          setInterval(() => {
            this.errormsg = '';
          }, 2000);
        }
      );
    } else {
      console.log('user empty');
    }

    this.user.reset();
  }
}
