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

 public isDarkTheme: boolean = false;
 private menuSwich : boolean = false;
 private menuIcon : boolean = false;
 showShadow = true;
  ngOnInit(){
   
    if(this.getIsDarkTheme()=== undefined){
      this.setIsDarkTheme(this.isDarkTheme);
    }else{
      this.isDarkTheme = this.getIsDarkTheme();
    }
      this.resize();
  }
onResize(event) { 
  if (event.target.innerWidth > 600) {
      this.menuSwich = true;
      this.menuIcon = true;
     }else{
       this.menuSwich = false;
      this.menuIcon = false;
     }
}
  resize(){
     if (window.screen.width > 900) {
      this.menuSwich = !this.menuSwich;
      this.menuIcon = !this.menuIcon;
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

