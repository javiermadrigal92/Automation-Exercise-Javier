import BasicInfo from "../pageObjects/basicInfo";
import Survey from "../pageObjects/survey";

describe('Automation Exercise', () => {
    it('Survey Form', () => {
        cy.visit('https://surveyrc.taxcreditco.com/automation-challenge')

        //initialize the values for the page objects
        const basicInfo = new BasicInfo();
        const survey = new Survey();

        //Step 1 - Basic Information
        basicInfo.setFirstName("Max");
        basicInfo.setLastName("Verstappen");
        basicInfo.setEmail("maxchampion@gmail.com");
        basicInfo.setStreet("Champion Road");
        basicInfo.setCity("Orlando");
        basicInfo.setZipCode("34747");
        basicInfo.clickNext();

        //Step 2 - Survey
        survey.clickSnap(false);
        survey.clickTanf(false);
        survey.clickMilitary(false);
        survey.clickDisability(false);
        survey.clickFelony(false);
        survey.clickUnemployed(false);
        basicInfo.clickNext();

        //Step 3 - Additional Information
        basicInfo.clickNext();

        //Step 4 - Redirection to the Experian Employer Services
        cy.origin('https://www.experian.com/employer-services', () => {
            cy.url().should('include', 'https://www.experian.com/employer-services');
        });
    });
});