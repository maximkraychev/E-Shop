import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExploreService } from './explore.service';
import { Subscription } from 'rxjs';
import { IBookAndId } from 'src/app/core/interfaces/book-with-id.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  providers: [ExploreService]
})
export class ExploreComponent implements OnInit, OnDestroy {

  books: IBookAndId[] = [];
  dataSub!: Subscription;
  constructor(private exploreService: ExploreService,private errorService: ErrorPopupService){}

  ngOnInit(): void {
    this.dataSub = this.exploreService.getRandomBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
