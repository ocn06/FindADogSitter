import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Dog } from './entities/dog';

@Pipe({name: 'filterDogs'})
@Injectable()
export class FilterDogs implements PipeTransform {
     transform(items: Dog[], args: string): any {
     
      if (args && items.length > 0) {

       let itemsFound = items.filter(
         item => item.firstname && 
         item.firstname.toLowerCase().includes(args.toLowerCase()) ||
          item.firstname && item.age && (item.firstname.toLowerCase() + " " + item.age).includes(args.toLowerCase())
       );
       if (itemsFound && itemsFound.length > 0 ){
         return itemsFound;
       }
       return [-1]; // to display error message (none found) in view.
     }
   return [];
 }
}