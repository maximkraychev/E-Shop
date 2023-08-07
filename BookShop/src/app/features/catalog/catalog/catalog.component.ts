import { Component, OnInit } from '@angular/core';
import { GetDataPaginationService } from 'src/app/core/services/get-data-pagination.service';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  mockData = [
    {title: 'Game Of Thrones', author: 'George R. R. Martin', price: 50, discount: '', img: '/assets/book1.jpg'},
    {title: 'Harry Potter And The Order of the Phoenix', author: 'J.K.Rowling', price: 30, discount: '', img: '/assets/book2.jpg'},
    {title: 'I Am Number Four The Power of Six', author: 'Pittacus Lore', price: 50, discount: 30, img: '/assets/book3.jpg'},
    {title: 'The Intelligent Investor', author: 'Benjamin Graham', price: 30, discount: 20, img: '/assets/book4.jpg'},
    {title: 'Elon Musk', author: 'Ashlee Vance', price: 30, discount: 20, img: '/assets/book5.jpg'},
  ]

  constructor(private paginationService: GetDataPaginationService) {}

  ngOnInit(): void {
    this.load(1);
    setTimeout(()=> {
      this.load(2);
    }, 3000)
  }


  load(page: number) {
    const test = this.paginationService.getPaginatedData('books', 2, 'title', page).subscribe({
      next: (data) => {
        console.log(data);
      }
    });
  }
}
