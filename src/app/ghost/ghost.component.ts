import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrl: './ghost.component.css'
})
export class GhostComponent implements OnInit {

  passwordCorrect = false;

  private readonly correctPassword = 'idan2410'; // Set your password here

  constructor() {}

  ngOnInit(): void {
    this.checkPassword();
  }

  checkPassword(): void {
    const password = prompt('Please enter the password to view this page:');
    if (password === this.correctPassword) {
      this.passwordCorrect = true;

} else {
      alert('Incorrect password!');
      this.passwordCorrect = false;
    }
  }
}
