import { last } from "lodash"

class MyInfoPage{
    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            saveButton: "[type='submit']",
            genderRadioInput: '.oxd-radio-input',
            dropdownSection: '.oxd-select-dropdown',
            dropdownButton: ".oxd-select-text--arrow",
            customFieldTextField: "[options='']"
        }

        return selectors
    }

    fillFullName(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeIdInfo(employeeId, otherId, driversLicense, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus(nationality, maritalStatus, birthDate){
        cy.get(this.selectorsList().dropdownButton).eq(0).click()
        cy.get(this.selectorsList().dropdownSection).contains(nationality).click()
        cy.get(this.selectorsList().dropdownButton).eq(1).click()
        cy.get(this.selectorsList().dropdownSection).contains(maritalStatus).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genderRadioInput).eq(1).click()
    }

    saveInfomation(){
        cy.get(this.selectorsList().saveButton).eq(0).click({force: true})
        cy.get('body').should('contain','Successfully Updated')
    }
}

export default MyInfoPage