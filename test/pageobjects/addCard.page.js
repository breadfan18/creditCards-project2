const Page = require('./page');
const Chance = require('chance');
const chance = new Chance();
let my_random_string = chance.string();
/**
 * sub page containing specific selectors and methods for a specific page
 */

class AddCardPage extends Page {
    newUserData = {
        accountStatus: 'Active',
        issuer: 'Citi',
        cardName: 'AA Platinum',
        appDate: '2021-04-30',
        nextFeeDate: '2022-06-25',
        creditLine: '31,000',
        bonusSpend: '7,000',
        bonusSpendDate: '2021-08-18',
        annualFee: '95',
    }
    /**
     * define selectors using getter methods
     */
    get googleSignInButton() {
        return $('#googleLogin')
    }
    get googleEmailInput() {
        return $('#identifierId')
    }
    get googleNextButton() {
        return $('#identifierNext')
    }
    get googlePwdField() {
        return $('input[type="password"]')
    }
    get googlePwdNextButton() {
        return $('#passwordNext')
    }
    get addCardNavLink() {
        return $('#addCardNavLink')
    }


    get cardHolder() {
        return $('#cardHolder')
    }
    get cardHolderOptions() {
        return $(`#cardHolder option:nth-child(${chance.integer({min: 1, max: 7})})`)
    }
    get issuer() {
        return $('#issuer')
    }
    get issuerOptions() {
        return $(`#issuer option:nth-child(${chance.integer({min: 1, max: 7})})`)
    }
    get cardName() {
        return $('#cardName')
    }
    get appDate() {
        return $('#appDate')
    }
    get experian() {
        return $('#experian')
    }
    get equifax() {
        return $('#equifax')
    }
    get transunion() {
        return $('#transunion')
    }
    get nextFeeDate() {
        return $('#nextFeeDate')
    }
    get creditLine() {
        return $('#creditLine')
    }
    get bonusSpend() {
        return $('#bonusSpend')
    }
    get bonusSpendDate() {
        return $('#bonusSpendDate')
    }
    get annualFee() {
        return $('#annualFee')
    }
    get btnSubmit() {
        return $('button[type="submit"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async addNewCard() {
        await (await this.googleSignInButton).click();
        await (await this.googleEmailInput).setValue('martialdex');
        await (await this.googleNextButton).click();
        await (await this.googlePwdField).setValue('dexter2015');
        await (await this.googlePwdNextButton).click();
        await (await this.addCardNavLink).click();
        
        
        await (await this.cardHolder).click();
        await (await this.cardHolderOptions).click();
        await (await this.issuer).click();
        await (await this.issuerOptions).click();
        await (await this.cardName).setValue(chance.animal());
        await (await this.appDate).setValue(chance.date({
            string: true
        }));
        await (await this.experian).click();
        await (await this.equifax).click();
        await (await this.nextFeeDate).setValue(chance.date({
            string: true
        }));
        await (await this.creditLine).setValue(chance.integer({
            min: 10000,
            max: 30000
        }));
        await (await this.bonusSpend).setValue(chance.integer({
            min: 2000,
            max: 5000
        }));
        await (await this.bonusSpendDate).setValue(chance.date({
            string: true
        }));
        await (await this.annualFee).setValue(chance.integer({
            min: 0,
            max: 500
        }));
        await (await this.btnSubmit).click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('addNewCard');
    }
}
module.exports = new AddCardPage();