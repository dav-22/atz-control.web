import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  height: number;


  ngOnInit(): void {
    this.height = window.innerHeight;
    console.log(this.height);
  }
}

