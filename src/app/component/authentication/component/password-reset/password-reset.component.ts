import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm,Validators} from "@angular/forms";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  CurrentPasswordFormControl= new FormControl('',[Validators.required]);
  NewPasswordFormControl = new FormControl('',[Validators.required]);
  ConfirmNewPasswordFormControl = new FormControl('',[Validators.required]);

  matcher = new MyErrorStateMatcher();


  constructor() { }

  ngOnInit(): void {
  }

}
