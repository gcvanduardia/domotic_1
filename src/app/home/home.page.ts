import { Component } from "@angular/core";
import { FireDBService } from "../services/fire-db.service";
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  slideOpts = {
    slidesPerView: 2.3,
    freeMode: true
  };

  constructor(
    public fireDB: FireDBService,
    public menu: MenuController,
    public router: Router
  ) {}

  firstMenu() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  iraLuz() {
    this.router.navigate(["/luz"]);
  }
}
