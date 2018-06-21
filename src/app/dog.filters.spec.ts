import { TestBed, async } from '@angular/core/testing';
import { FilterDogs } from '../app/dogs.filter';
import { Dog } from '../app/entities/dog';


describe('FilterDogs', () => {
    let items: Dog[] = [
            { id: 21, name: 'Per', breed: 'bulldog', postalcode: 2450, age: 10, gender: 'Male' },
            { id: 22, name: 'Jens', breed: 'bulldog', postalcode: 2450, age: 10, gender: 'Male'},
        ];

        let filter = new FilterDogs();

        it('should filter Per and return 1', () => {
            let filteredItems = filter.transform(items, "Per")

            expect(filteredItems.length).toEqual(1);
        });

        it('should filter Lone and return 0', () => {
            let filteredItems = filter.transform(items, "Lone")

            expect(filteredItems).toEqual(-1);
        });
});
