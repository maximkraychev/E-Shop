// import { Directive } from '@angular/core';
// import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
// import { trimValidator } from '../validators/trim-validator';

// @Directive({
//   selector: '[trim]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: TrimDirective,
//       multi: true
//     }
//   ]
// })
// export class TrimDirective implements Validator {
//   validate(control: AbstractControl): ValidationErrors | null {
//     console.log(control, 'aosdfajsifohajfuihuih');
    
//     return trimValidator(control);
//   }
// }

import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[trim]',
  exportAs: 'trim'
})
export class TrimDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string): void {
    console.log(value);
    
    const trimmedValue = value.trim();
    console.log(trimmedValue);
    
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', trimmedValue);
  }
}

