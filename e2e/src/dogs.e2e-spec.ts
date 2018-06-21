import { browser, by, element } from 'protractor';
//Comment out CanActivate under Users-list in app-routing 
describe('Dogs test', () => {
    it('should test if there is one dog already', async() => {
        browser.get("/users-list/dogs");
        element.all(by.css(".e2e-dog")).then(function(elements) {
            const dogs = elements.length;
            expect(dogs).toBe(1);
        });
    });
});