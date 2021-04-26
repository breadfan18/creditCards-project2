const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
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
    get cardHolder() {
        return $('#cardHolder')
    }
    get cardHolderOptions() {
        return $(`#cardHolder option:nth-child(${Math.floor(Math.random() * (7 - 1) + 1)})`)
    }
    get issuer() {
        return $('#issuer')
    }
    get issuerOptions() {
        return $(`#issuer option:nth-child(${Math.floor(Math.random() * (8 - 1) + 1)})`)
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
    async login() {
        await (await this.cardHolder).click();
        await (await this.cardHolderOptions).click();
        await (await this.issuer).click();
        await (await this.issuerOptions).click();
        await (await this.cardName).setValue('Cashback');
        await (await this.appDate).setValue('09/30/2019');
        await (await this.experian).click();
        await (await this.equifax).click();
        await (await this.nextFeeDate).setValue('09/30/2020');
        await (await this.creditLine).setValue('12,000');
        await (await this.bonusSpend).setValue('4,000');
        await (await this.bonusSpendDate).setValue('09/07/2020');
        await (await this.annualFee).setValue('0');
        await (await this.btnSubmit).click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}
module.exports = new LoginPage();