import {Component, Optional, ViewChild, ViewContainerRef} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar , MdSidenav} from '@angular/material';

declare  var window:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    host: {
    '[class.m2app-dark]': 'isDarkTheme',
  },
})
export class AppComponent {

 public isDarkTheme: boolean = true;
 private menuSwich : boolean = false;
 private menuIcon : boolean = false;
 showShadow = true;
  ngOnInit(){

    if(this.getIsDarkTheme()=== undefined){
      this.setIsDarkTheme(this.isDarkTheme);
    }else{
      this.isDarkTheme = this.getIsDarkTheme();
    }
    if (window.screen.width > 900) {
      this.menuSwich = true;
      this.menuIcon = true;
    }

  }

  switchThem(){
    this.isDarkTheme = !this.isDarkTheme;
    this.setIsDarkTheme(this.isDarkTheme);
  }
  setIsDarkTheme(isDarkTheme) {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }
   getIsDarkTheme() {
    return JSON.parse(localStorage.getItem("isDarkTheme"));
  }

}

