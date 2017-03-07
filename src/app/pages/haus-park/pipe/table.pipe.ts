import {Pipe,PipeTransform} from "@angular/core";



@Pipe({
  name: 'opencloseFilter',
  pure: false
})
export class OpenCloseFilter  implements PipeTransform{

   transform(park: any){
       let parkclass:String;
       if (!(park.Gesamt - park.Aktuell > 20)){
           parkclass = 'warning';
       }
       if (park.Status === 'Geschlossen') {
           parkclass = 'danger';
       }
       return parkclass;
   }
}


@Pipe({
  name: 'freiplatzeFilter',
  pure: false
})
export class FreiPlatzeFilter  implements PipeTransform{
   transform(FreiPlatze: any){
       if (FreiPlatze > 20) {
           return 'greene';
       }
       if (FreiPlatze >10 && FreiPlatze <= 20 ) {
           return 'orange';
       }
       if (FreiPlatze <= 10) {
           return 'red';
       }
   }
}


@Pipe({
  name: 'statusFilter',
  pure: false
})
export class statusFilter  implements PipeTransform{
   transform(status: string){
       if (status === 'Offen') {
           return 'greene';
       }else{
           return 'red';
       }
   }
}