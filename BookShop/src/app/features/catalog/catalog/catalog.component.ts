import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { IBook } from 'src/app/core/interfaces/book.interface';
import { ErrorPopupService } from 'src/app/core/services/error-popup.service';
import { CatalogService } from '../catalog.service';
import { NgForm } from '@angular/forms';
import { IFilterData } from 'src/app/core/interfaces/catalog-filter-interface';
import { SelectOptionValues } from 'src/app/core/interfaces/select-option-values.type';
import { SORT_TABLE } from 'src/app/config/sort-table';
import { ISortData } from 'src/app/core/interfaces/catalog-sort.interface';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {

  @ViewChild('filterForm') filterForm!: NgForm;
  @ViewChild('selectElement') selectElement!: ElementRef;

  //Books data;
  collectionSize!: number;
  loadedBooks: { id: string, book: IBook }[] | [] = [];

  //For pagination;
  firstShownDocument: string | number | null = null
  lastShownDocument: string | number | null = null;

  // For filter;
  filter: IFilterData = {};
  activeSort: ISortData = SORT_TABLE.fromAtoZ;

  // Subs;
  activeSubsForBooksData: Subscription[] = []
  selectElementSub!: () => void;
  sizeSub!: Subscription;

  constructor(private catalogService: CatalogService, private errorService: ErrorPopupService, private render: Renderer2) { }

  ngOnInit(): void {
    // On init load the initial books and collection size;
    this.loadForward();
    this.sizeSub = this.catalogService.getBooksCollectionSize().subscribe((size) => this.collectionSize = size);
  }

  ngAfterViewInit() {
    // Set a listener on select btn and change the content on value chnage; 
    this.selectElementSub = this.render.listen(this.selectElement.nativeElement, 'change', this.setActiveSort.bind(this));
  }

  loadForward() {
    // Its invoked on component first load and when 'NEXT' btn is clicked;
    this.activeSubsForBooksData.push(this.catalogService.getCatalogPage(this.lastShownDocument, null, this.activeSort, this.filter).subscribe({
      next: (data) => {
        this.managerForFirstAndLastDocument(data);
        this.managerForActiveSubs();
        this.loadedBooks = data;
      },
      error: (err: Error) => {
        console.error(err);
        this.errorService.pushErrorMsg(err.message);
      }
    }));
  }

  loadBackward() {
    // It's invoked on 'PREVIOUS' btn click;
    this.activeSubsForBooksData.push(this.catalogService.getCatalogPage(null, this.firstShownDocument, this.activeSort, this.filter).subscribe({
      next: (data) => {
        this.managerForFirstAndLastDocument(data);
        this.managerForActiveSubs();
        this.loadedBooks = data;
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
      const param = this.activeSort.sortByParam as 'title' | 'price' | 'discount';
      
      this.firstShownDocument = data[0].book[param];
      this.lastShownDocument = data[data.length - 1].book[param];
    }
  }

  managerForActiveSubs() {
    // Managing subcription so we have only one active;
    while (this.activeSubsForBooksData.length > 1) {
      const sub = this.activeSubsForBooksData.shift();
      sub?.unsubscribe();
    }
  }

  setActiveSort(event: Event) {
    const activeOption = (event.target as HTMLSelectElement).value as SelectOptionValues;
    this.activeSort = SORT_TABLE[activeOption] as ISortData;
    this.firstShownDocument = null;
    this.lastShownDocument = null;
    this.loadForward();
  }


  applayFilter() {
    // const values = this.filterForm.value as IFilterData;

    // if (typeof values.maxPrice == 'number') {
    //   this.filter.maxPrice = values.maxPrice;
    // }

    // if (typeof values.minPrice == 'number') {
    //   this.filter.maxPrice = values.minPrice;
    // }

    // if (values.search != '') {
    //   this.filter.search = values.search;
    // }

    // if (typeof values.maxPrice == 'number' && typeof values.minPrice == 'number' && values.minPrice > values.maxPrice) {
    //   this.errorService.pushErrorMsg('Minimum price cannot exceed maximum price.');
    //   return;
    // }
    

    // this.firstShownDocument = null;
    // this.lastShownDocument = null;
    // this.loadForward();
    // console.log(this.loadedBooks);
    
  }

  ngOnDestroy(): void {
    // Unsubscribe
    this.activeSubsForBooksData.forEach(x => x.unsubscribe());
    this.sizeSub.unsubscribe();
    this.selectElementSub();
  }
}
