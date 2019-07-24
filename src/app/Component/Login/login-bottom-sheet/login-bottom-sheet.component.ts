import { Component, ViewEncapsulation } from "@angular/core";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";

declare var gapi: any;

@Component({
  selector: "app-login-bottom-sheet",
  templateUrl: "./login-bottom-sheet.component.html",
  styleUrls: ["./login-bottom-sheet.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginBottomSheetComponent {
  color = ['#ff525259','#3b579d59','#00a9be59']
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<LoginBottomSheetComponent>
  ) {}

  closeDialog(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public auth2: any;
  public googleInit() {
    gapi.load("auth2", () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          "443814597246-taljsjarm7rjkovc1gi7378vebtjfn58.apps.googleusercontent.com",
        cookiepolicy: "single_host_origin",
        scope: "profile email"
      });
      this.attachSignin(document.getElementById("googleBtn"));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      googleUser => {
        let profile = googleUser.getBasicProfile();
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        //YOUR CODE HERE
      },
      error => {
        console.log(JSON.stringify(error, undefined, 2));
      }
    );
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
