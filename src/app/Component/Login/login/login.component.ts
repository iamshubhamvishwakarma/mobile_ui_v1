import { Component, OnInit } from "@angular/core";
import { MatBottomSheet } from "@angular/material";
import { LoginBottomSheetComponent } from "../login-bottom-sheet/login-bottom-sheet.component";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(LoginBottomSheetComponent);
  }
  ngOnInit() {}
}
