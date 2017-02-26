import { Injectable, ErrorHandler } from "@angular/core";
import { IonicErrorHandler } from 'ionic-angular';
import { ServerException } from "./ServerException";
import {ModalDialogComponent} from "./modalDialog.component";
import {ModalController, NavParams } from "ionic-angular";

@Injectable()
export class AddExceptionHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(public modalCtrl:ModalController) {
    super();
  }

  handleError(err:any):void {
    //super.handleError(err);
    console.log("AddExceptionHandler error:");
    console.log(err);
    if (err.message && err.message.status == 401) {
      let message = "Invalid user.";
      let modal = this.modalCtrl.create(ModalDialogComponent, {message: message}, {});
      modal.present({ });
    }
  }
}
