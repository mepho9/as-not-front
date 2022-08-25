import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {SessionService} from "../../services/session.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  registerForm = new FormGroup({
    sexe: new FormControl("", [Validators.required, Validators.min(3)]),
    username: new FormControl("", [Validators.required, Validators.min(3)]),

    email: new FormControl("", [Validators.required, Validators.min(3)]),

    password: new FormControl("", [Validators.required, Validators.min(4)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.min(4)])

  });

  token: string = "";


  constructor(private _auth: AuthService, private _session: SessionService, private _router: Router) { }

  ngOnInit(): void {
  }

  register(){
    if (this.registerForm.get("password")?.value === this.registerForm.get("confirmPassword")?.value) {
      this._auth.register(<string>this.registerForm.get("username")?.value, <string>this.registerForm.get("password")?.value).subscribe(_ => {
        this._auth.login(<string>this.registerForm.get("username")?.value, <string>this.registerForm.get("password")?.value).subscribe(token => {
          this.token = token["token"];
          localStorage.setItem("token", this.token);
          this._session.login(this.token);
          this._router.navigate(["/"]);
        });
      });
    }
  }
}
