import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors, NgModelGroup } from '@angular/forms';

@Directive({
  selector: '[passwordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})
export class PasswordMatchDirective implements Validator {

  // It can be done also through control.parent;

  @Input('passwordMatch') passwordGroup!: NgModelGroup

  validate(control: AbstractControl): ValidationErrors | null {
    const password = this.passwordGroup.control.get('password');
    const repassword = this.passwordGroup.control.get('rePassword');

    if (password && repassword && password.value !== repassword.value) {
      return { passwordMatch: true };
    }

    return null;
  }
}


