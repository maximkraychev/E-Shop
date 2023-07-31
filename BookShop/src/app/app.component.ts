import { Component } from '@angular/core';
import { TestService } from './test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookShop';

  constructor(private test: TestService){
    test.getAll().subscribe({
      next: (data) => {
        console.log(data);
      }
    })
  }
}
