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
  loadedBooks: { id: string, book: IBook }[] | [] = [];

  //For pagination;
  firstShownDocument: string | number | null = null
  lastShownDocument: string | number | null = null;

  // For filter;
  filter!: IFilterData;
  activeSort: ISortData = SORT_TABLE.fromAtoZ;

  // Subs;
  activeSubs: Subscription[] = []
  selectElementSub!: Subscription;

  constructor(private catalogService: CatalogService, private errorService: ErrorPopupService, private render: Renderer2) { }

  ngOnInit(): void {
    this.loadForward();
  }

  ngAfterViewInit() {
    this.render.listen(this.selectElement.nativeElement, 'change', this.setActiveSort.bind(this))
  }

  loadForward() {
    console.log(this.lastShownDocument);
    
    // Its invoked on component first load and when 'NEXT' btn is clicked;
    this.activeSubs.push(this.catalogService.getCatalogPage(this.lastShownDocument, null, this.activeSort).subscribe({
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
    this.activeSubs.push(this.catalogService.getCatalogPage(null, this.firstShownDocument, this.activeSort).subscribe({
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
      const param = this.activeSort.sortByParam as 'title' | 'price' | 'discount'
      console.log(param);
     
      
      this.firstShownDocument = data[0].book[param];
      this.lastShownDocument = data[data.length - 1].book[param];
    }
  }

  managerForActiveSubs() {
    // Managing subcription so we have only one active;
    while (this.activeSubs.length > 1) {
      const sub = this.activeSubs.shift();
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
    const values = this.filterForm.value as IFilterData;

    if (typeof values.maxPrice == 'number') {
      this.filter.maxPrice = values.maxPrice;
    }

    if (typeof values.minPrice == 'number') {
      this.filter.maxPrice = values.minPrice;
    }

    if (values.search != '') {
      this.filter.search = values.search;
    }

    if (typeof values.maxPrice == 'number' && typeof values.minPrice == 'number' && values.minPrice > values.maxPrice) {
      this.errorService.pushErrorMsg('Minimum price cannot exceed maximum price.');
      return;
    }

    this.firstShownDocument = null;
    this.lastShownDocument = null;
    this.loadForward();
  }


  ngOnDestroy(): void {
    this.activeSubs.forEach(x => x.unsubscribe());
    this.selectElementSub?.unsubscribe();
  }
}
