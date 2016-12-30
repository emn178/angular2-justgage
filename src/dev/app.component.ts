import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  options = {
    id: "gauge",
    value: 99,
    min: 0,
    max: 999,
    title: "Visitors"
  }
  max = 100;
  value = 67;

  ngOnInit() {
    setTimeout(() => {
      this.max = 200;
      this.value = 123;
    }, 3000);
  }
}
