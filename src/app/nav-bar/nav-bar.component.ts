import { Component } from '@angular/core';

@Component({
  selector: 'NavBar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  title = 'app';

  // **********NAV-BAR**********
  homeIcon = document.getElementById('home-icon');
  aboutIcon = document.getElementById('about-icon');
  contactIcon = document.getElementById('contact-icon');

  homeIconClick() {
    console.log('home icon clicked');
  }

  aboutIconClick() {
    console.log('about icon clicked');
  }

  contactIconClick() {
    console.log('contact icon clicked');
  }
}
