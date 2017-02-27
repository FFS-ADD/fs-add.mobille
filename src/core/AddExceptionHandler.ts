import {Injectable, ErrorHandler} from "@angular/core";
import {IonicErrorHandler} from 'ionic-angular';
import {ServerException} from "./ServerException";
import {ModalDialogComponent} from "./modalDialog.component";
import {ModalController} from "ionic-angular";
import {UserService} from "./UserService";
import {Login} from "../pages/signIn/login/Login";

@Injectable()
export class AddExceptionHandler extends IonicErrorHandler implements ErrorHandler {

  constructor(private modalCtrl: ModalController, private useService: UserService) {
    super();
  }

  handleError(err: any): void {
    //super.handleError(err);
    console.debug("AddExceptionHandler error:");
    console.debug(err);
    if (err.message && err.message.status == 401) {
      let message = "The password is incorrect";
      let modal = this.modalCtrl.create(ModalDialogComponent, {message: message}, {});
      modal.present();
    } else if (err.message && err.message.status == 400) {
      let message = "Authorization failed.";
      let modal = this.modalCtrl.create(ModalDialogComponent, {message: message}, {});
      modal.present()
      // modal.present();.then((d) => {
      //   console.log("bcd");
      //   console.log(d);
      //   this.useService.setAccessToken(null);
      //   this.navCtrl.push(Login)
      // });
    }
  }
}
