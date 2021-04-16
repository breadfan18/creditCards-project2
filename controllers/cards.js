const Card = require('../models/card');

module.exports = {
    index,
    new: newCard,
    create
}

function index(req, res) {
    res.render('cards/index');
}

function newCard(req, res) {
    res.render('cards/new');
}

function create(req, res) {
    // console.log(req.body);

    let creditPullArr = [req.body.experian, req.body.equifax, req.body.transunion];

    let cardObj = {
        applicant: req.body.applicant,
        issuer: req.body.issuer,
        cardName: req.body.cardName,
        appDate: req.body.appDate,
        creditPull: creditPullArr,
        nextFeeDate: req.body.nextFeeDate,
        creditLine: req.body.creditLine,
        bonusSpend: req.body.bonusSpend,
        bonusSpendDate: req.body.bonusSpendDate,
        annualFee: req.body.annualFee
    }

    Card.create(cardObj, function(err, card){
        console.log(err)
        if(err) return res.redirect('/cards/new');
        res.redirect('/cards');
    })
   
}