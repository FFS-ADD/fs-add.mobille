import {Component, Output, EventEmitter, ViewChild }from "@angular/core"; 
import {NavController, ViewController}from 'ionic-angular'; 

@Component( {
  templateUrl:"modalDialog.html"
})
export class ModalDialogComponent {
  private vm; 
    @ViewChild("modalBackground")private backgroundElem; 
    @Output()private submit = new EventEmitter(); 
    private showDetail = false; 

    constructor(private viewCtrl:ViewController) {
    }

      private close() {
        this.viewCtrl.dismiss(); 
    }

    private isOutsideClicked(event) {
      // console.debug("aaaaa");
      //   console.debug(this.backgroundElem);
      //   let backgroundNativeElem = this.backgroundElem.elementRef.nativeElement; 
      //   if (event.target === backgroundNativeElem || event.target === backgroundNativeElem.firstChild) {
            this.close(); 
        // }
    }
}
