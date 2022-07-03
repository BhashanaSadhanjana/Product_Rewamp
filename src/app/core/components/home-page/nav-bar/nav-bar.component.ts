import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private cookieService:CookieService,private router: Router) { }

  ngOnInit(): void {
  }

  logout() {

    this.cookieService.delete('Token')
    this.router.navigate(['/authentication']);
  }
}
