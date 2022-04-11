import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  public firstName = '';
  public lastName = '';

  alert() {
    this.snackBar.open(`Hi ${this.firstName} ${this.lastName}!`, 'Close', { duration: 3000, verticalPosition: 'top'});
  }
}
