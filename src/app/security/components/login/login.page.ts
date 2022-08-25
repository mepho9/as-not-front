import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  token: string = "";

  // constructor
  constructor(private _auth: AuthService, private _session: SessionService, private _router: Router) { }

  // methods
  ngOnInit() {
  }

  login() {
      this._auth.login(this.username,this.password).subscribe(token => {
        this.token = token["token"];
        localStorage.setItem("token",this.token);
        this._session.login(this.token);
        this._router.navigate(["/loader"]);
      })

  }

}
