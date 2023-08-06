import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent {

  @Input('loading') loading: boolean = false;
  @Input('is-disabled') isDisabled: boolean | null = false;
  @Input('add-class') inputClass: string = '';

}
