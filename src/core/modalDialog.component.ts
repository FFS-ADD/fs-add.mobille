import {Component, Output, EventEmitter, ViewChild }from "@angular/core";
import {NavController, ViewController,NavParams }from 'ionic-angular';

@Component({
  templateUrl: "modalDialog.html"
})
export class ModalDialogComponent {
  private vm;
  @ViewChild("modalBackground") private backgroundElem;
  @Output() private submit = new EventEmitter();
  private message;

  constructor(private viewCtrl:ViewController, private params: NavParams) {
    this.message = this.params.get("message");
  }

  private close() {
    this.viewCtrl.dismiss();
  }

  private isOutsideClicked(event) {
    this.close();
  }
}
