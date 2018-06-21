import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Sitter } from 'src/app/entities/sitter';
import { SitterComponent } from 'src/app/users-list/sitter/sitter.component';

@Pipe({ name: 'filterSitters' })
@Injectable()
export class FilterSitter implements PipeTransform {
    transform(items: Sitter[], sitter: string): any {

        if (sitter && items.length > 0) {
            let itemsFound = items.filter(
                item => item.firstname 
                && item.firstname.toLowerCase().includes(sitter.toLowerCase()) ||
                item.firstname && item.postalcode && (item.firstname.toLowerCase() + " " + item.postalcode).includes(sitter.toLowerCase()));

            if (itemsFound && itemsFound.length > 0) {
                return itemsFound;
            }
            return [-1]; // to display error message (none found) in view.
        }
        return [];
    }
}