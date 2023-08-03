import { Component } from '@angular/core';

@Component({
  selector: 'app-new-books-section',
  templateUrl: './new-books-section.component.html',
  styleUrls: ['./new-books-section.component.css']
})
export class NewBooksSectionComponent {
  mockData = [
    {title: 'Game Of Thrones', author: 'George R. R. Martin', price: '30', discountPrice: '', img: '/assets/book1.jpg'},
    {title: 'Harry Potter And The Order of the Phoenix', author: 'J.K.Rowling', price: '30', discountPrice: '', img: '/assets/book2.jpg'},
    {title: 'I Am Number Four The Power of Six', author: 'Pittacus Lore', price: '30', discountPrice: '20', img: '/assets/book3.jpg'},
    {title: 'The Intelligent Investor', author: 'Benjamin Graham', price: '30', discountPrice: '20', img: '/assets/book4.jpg'},
    {title: 'Elon Musk', author: 'Ashlee Vance', price: '30', discountPrice: '20', img: '/assets/book5.jpg'},
    {title: 'I Am Number Four The Power of Six', author: 'Pittacus Lore', price: '30', discountPrice: '20', img: '/assets/book3.jpg'},
    {title: 'Game Of Thrones', author: 'George R. R. Martin', price: '30', discountPrice: '', img: '/assets/book1.jpg'},
    {title: 'The Intelligent Investor', author: 'Benjamin Graham', price: '30', discountPrice: '20', img: '/assets/book4.jpg'},
  ]
}
