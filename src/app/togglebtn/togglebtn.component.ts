import { ThemeService } from './../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-togglebtn',
  templateUrl: './togglebtn.component.html',
  styleUrls: ['./togglebtn.component.scss'],
})
export class TogglebtnComponent implements OnInit {
  constructor(public serv: ThemeService) {}

  ngOnInit(): void {}
}
