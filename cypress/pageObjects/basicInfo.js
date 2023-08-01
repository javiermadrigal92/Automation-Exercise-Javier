//Page objects for the Basic Information page
class BasicInfo {
    setFirstName(firstName) {
        cy.get('[name^="SurveyControl$Question943$"]').type(firstName);
    };

    setLastName(lastName) {
        cy.get('[name^="SurveyControl$Question946$"]').type(lastName);
    };

    setEmail(email) {
        cy.get('[name^="SurveyControl$Question949$"]').type(email);
    };

    setStreet(street) {
        cy.get('[name^="SurveyControl$Question950$"]').type(street);
    };

    setCity(city) {
        cy.get('[name^="SurveyControl$Question951$"]').type(city);
    };

    setZipCode(zipCode) {
        cy.get('[name^="SurveyControl$Question952$"]').type(zipCode);
    };

    clickNext() {
        cy.get('#SurveyControl_SurveySubmit').click();
    };
};

export default BasicInfo;