import { Injectable, ErrorHandler } from "@angular/core";
import { IonicErrorHandler } from 'ionic-angular';
import { BusinessFailureException } from "./BusinessFailureException";
import {ModalDialogComponent} from "./modalDialog.component";
import {ModalController} from "ionic-angular/index";

@Injectable()
export class AddExceptionHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(public modalCtrl: ModalController){
    super();
  }

  handleError(err:any):void {
    //super.handleError(err);
    console.log("AddExceptionHandler error:");
    console.log(err);
    // let modal = this.modalCtrl.create(ModalDialogComponent, {userId: 8675309});
    // modal.present();
  }
}
