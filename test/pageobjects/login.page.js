const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
 let newUserData =  {
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

class LoginPage extends Page {

    
    /**
     * define selectors using getter methods
     */
    get cardHolder () { return $('#cardHolder') }
    get issuer () { return $('#issuer') }
    get cardName () { return $('#cardName') }
    get appDate () { return $('#appDate') }
    get experian () { return $('#experian') }
    get equifax () { return $('#equifax') }
    get transunion () { return $('#transunion') }
    get nextFeeDate () { return $('#nextFeeDate') }
    get creditLine () { return $('#creditLine') }
    get bonusSpend () { return $('#bonusSpend') }
    get bonusSpendDate () { return $('#bonusSpendDate') }
    get annualFee () { return $('#annualFee') }
    get btnSubmit () { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (newUserData) {
        await (await this.cardHolder).click();
        await (await this.issuer).click();
        await (await this.cardName).setValue('test card');
        await (await this.appDate).setValue(newUserData.appDate);
        await (await this.experian).click();
        await (await this.equifax).click();
        await (await this.nextFeeDate).setValue(newUserData.nextFeeDate);
        await (await this.creditLine).setValue(newUserData.creditLine);
        await (await this.bonusSpend).setValue(newUserData.bonusSpend);
        await (await this.bonusSpendDate).setValue(newUserData.bonusSpendDate);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
