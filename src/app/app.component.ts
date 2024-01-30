import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {DetailComponent} from "./detail/detail.component";
import {ListComponent} from "./list/list.component";
import {cheeses} from "./data/mock-cheese";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbar,
    MatMiniFabButton,
    MatIcon,
    MatSidenavContainer,
    MatSidenav,
    DetailComponent,
    ListComponent,
    MatSidenavContent,
    RouterLink,
    RouterLinkActive,
    MatButton
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '3030x2';
  cheeses = cheeses;
}
