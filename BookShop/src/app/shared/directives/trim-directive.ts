import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[trim]'
})
export class TrimDirective implements OnInit, OnDestroy {

  private inputSub!: () => void;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.inputSub = this.renderer.listen(this.elementRef.nativeElement, 'input', this.onInput.bind(this));
  }

  onInput(event: InputEvent): void {
    const value = (event.target as HTMLInputElement).value;
    
    if (typeof value == 'string') {
      const trimmedValue = value.trim();
      this.renderer.setProperty(this.elementRef.nativeElement, 'value', trimmedValue);
    }
  }

  ngOnDestroy(): void {
    this.inputSub();
  }

  // This is another way of doing it but it should be worse based on google search :)
  
  // @HostListener('input', ['$event.target.value'])
  // onInput(value: string): void {
  //   if (typeof value == 'string') {
  //     const trimmedValue = value.trim();
  //     this.renderer.setProperty(this.elementRef.nativeElement, 'value', trimmedValue);
  //   }
  // }

}

