import { browser, by, element } from 'protractor';

describe('Dogs test', () => {
    it('Should create a new dog when form is valid', async() => {
        // How many dogs?
        // Create a new dog
        // How many dogs?
        // Assert: One more dog
        
        browser.get("/users-list/dogs"); // Page reloads, 1 sec or 2.
        element.all(by.css(".e2e-dog")).then(function(elementsBefore) {
            const numDogsBefore = elementsBefore.length;
            browser.get("/register/dog");
            
            // element.all(by.css("formcontrolname"))
            element(by.id("name")).sendKeys("Test - Karl");
            element(by.id("breed")).sendKeys("Test - Pitbull");
            element(by.id("age")).sendKeys("2");
            element(by.id("gender")).sendKeys("Test - Male");
            element(by.id("postalcode")).sendKeys("Test - 2450");

            element(by.id("e2e-submit")).click();

            element.all(by.css(".e2e-dog")).then(function(elementsAfter) {
            const numDogsAfter = elementsAfter.length;
            
            expect(numDogsAfter).toBe(numDogsBefore+1);
            
            
            // expect(numDogsAfter-numDogsBefore).toBe(1);

            // console.log(numDogsBefore);
            // browser.sleep(8000);
            });
        });
    });
    it('Should NOT create a new dog when form is NOT valid', async() => {
    expect(false).toBeTruthy();
    });
});