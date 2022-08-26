import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private _menu: MenuController) { }

  ngOnInit() {
    this._menu.enable(true, "main")
    this._menu.open("main")
  }

}
