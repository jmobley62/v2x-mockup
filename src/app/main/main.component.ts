import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  name = document.getElementById('name');
  email = document.getElementById('email');
  phone = document.getElementById('phone');
  message = document.getElementById('message');

  constructor() {}

  // ngOnInit(): void {
  //   addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     console.log(name.value);
  // }
}
