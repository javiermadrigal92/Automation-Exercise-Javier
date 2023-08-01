//Page objects for the Survey page
class Survey {
    //answer will represent a boolean to determine if the choice in the survey is yes(true) or no(false)
    clickSnap(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question11396 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question11396 > div > label:nth-child(2)').click();
        }
    };

    clickTanf(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question11397 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question11397 > div > label:nth-child(2)').click();
        }
    };

    clickMilitary(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question914 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question914 > div > label:nth-child(2)').click();
        }
    };

    clickDisability(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question11361 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question11361 > div > label:nth-child(2)').click();
        }
    };

    clickFelony(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question915 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question915 > div > label:nth-child(2)').click();
        }
    };

    clickUnemployed(answer) {
        if(answer) {
            cy.get('#SurveyControl_Question1244 > div > label:nth-child(1)').click();
        } else {
            cy.get('#SurveyControl_Question1244 > div > label:nth-child(2)').click();
        }
    };
};

export default Survey;