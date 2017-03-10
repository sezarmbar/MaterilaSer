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

//  @ViewChild('sidenavEnd') sidenavEnd: MdSidenav; 
 public isDarkTheme: boolean = true;
 private menuSwich : boolean = false;
 private menuIcon : boolean = false;
 showShadow = true;
//  public lastDialogResult: string;
//  public sidenavOpen:boolean = false;
//  private slideInit:boolean = false;
 
//   foods: any[] = [
//     {name: 'Pizza', rating: 'Excellent'},
//     {name: 'Burritos', rating: 'Great'},
//     {name: 'French fries', rating: 'Pretty good'},
//   ];

//   progress: number = 0;

//   constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    
//     // Update the value for the progress-bar on an interval.
//     setInterval(() => {
//       this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
//     }, 200);
//   }

//   openDialog() {
//     let dialogRef = this._dialog.open(DialogContent);

//     dialogRef.afterClosed().subscribe(result => {
//       this.lastDialogResult = result;
//     })
//   }

//   showSnackbar() {
//     this._snackbar.open('YUM SNACKS', 'CHEW');
//   }

  ngOnInit(){
    if (window.screen.width > 900) {
      this.menuSwich = true;
      this.menuIcon = true;
    }
  }
//   onSelectChange = (event: any): void => {

//     if(event.index === 1 ){
//       this.slideInit = true;
//     }else{
//       this.slideInit = false;
//     }
//   }

}

