import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {loginDTO} from "../../dto/loginDTO";
import {CookieService} from "ngx-cookie-service";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required]);
  passwordFormControl = new FormControl('',[Validators.required]);

  matcher = new MyErrorStateMatcher();
  currentYear!:number;

  loginForm!: FormGroup;
  tokenv:any;

  constructor(private router: Router,private cookieService: CookieService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.currentYear  = new Date().getFullYear();
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  LoginUser() {
    this.loginService.userLogin(new loginDTO(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value
    )).subscribe(
      res=>{
        if (res.content){
          console.log("token save")
          console.log(res)
          if (res.code =="00"){
            this.cookieService.set('Token', JSON.stringify(res.content));
            this.router.navigate(['/home-page']);
          }else{
            this.router.navigate(['/password-reset']);
          }
          //
          //
        }else{
          //this.openSnackBar()
        }
      },
      err => {
        console.log('HTTP Error', err)
        //this.openSnackBar()
      },
    )
  }
}
