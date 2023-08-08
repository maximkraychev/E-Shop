import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { CatalogService } from '../catalog.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  mockData = [
    { title: 'Game Of Thrones', author: 'George R. R. Martin', price: 50, discount: '', img: '/assets/book1.jpg' },
    { title: 'Harry Potter And The Order of the Phoenix', author: 'J.K.Rowling', price: 30, discount: '', img: '/assets/book2.jpg' },
    { title: 'I Am Number Four The Power of Six', author: 'Pittacus Lore', price: 50, discount: 30, img: '/assets/book3.jpg' },
    { title: 'The Intelligent Investor', author: 'Benjamin Graham', price: 30, discount: 20, img: '/assets/book4.jpg' },
    { title: 'Elon Musk', author: 'Ashlee Vance', price: 30, discount: 20, img: '/assets/book5.jpg' },
  ]

  firstShownDocument: string | null = null
  lastShownDocument: string | null = null;
  activeSubs: Subscription[] = []


  constructor(private catalogService: CatalogService, private errorService: ErrorPopupService) { }

  ngOnInit(): void {
    this.loadForward();

    setTimeout(() => {
      this.loadForward();
    }, 1000)
    setTimeout(() => {
      this.loadForward();
    }, 2000)

    setTimeout(() => {
      this.loadBackward();
    }, 3000)
    setTimeout(() => {
      this.loadBackward();
    }, 4000)

  }

  loadForward() {
    this.activeSubs.push(this.catalogService.getCatalogPage(this.lastShownDocument, null, 'title').subscribe({
      next: (data) => {
        this.managerForFirstAndLastDocument(data);
        this.managerForActiveSubs();

        console.log(data.map(x => x.book.title));
      },
      error: (err: Error) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    }));
  }

  loadBackward() {
    this.activeSubs.push(this.catalogService.getCatalogPage(null, this.firstShownDocument, 'title').subscribe({
      next: (data) => {
        this.managerForFirstAndLastDocument(data);
        this.managerForActiveSubs();
        console.log(data.map(x => x.book.title));
      },
      error: (err: Error) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    }));
  }

  managerForFirstAndLastDocument(data: { id: string, book: IBook }[]) {
    // If we have data save the first and last required param;
    // This is used for starting point for the next forwrd or backward action;
    if (data.length > 0) {
      this.firstShownDocument = data[0].book.title;
      this.lastShownDocument = data[data.length - 1].book.title;
    }
  }

  managerForActiveSubs() {
    // Managing subcription so we have only one active;
    while (this.activeSubs.length > 1) {
      const sub = this.activeSubs.shift();
      sub?.unsubscribe();
    }
  }


  ngOnDestroy(): void {
    this.activeSubs.forEach(x => x.unsubscribe());
  }
}
