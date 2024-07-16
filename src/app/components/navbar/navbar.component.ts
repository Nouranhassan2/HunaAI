import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarOpen = false;

    toggleNavbar() {
      console.log("toggleNavbar called");
      this.navbarOpen = !this.navbarOpen;
    }  }

