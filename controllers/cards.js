const Card = require('../models/card');
const User = require('../models/user');


module.exports = {
    index,
    new: newCard,
    create
}

function index(req, res) {
    Card.find({}, function(err, cards){
        res.render('cards/index', {
            title: 'All Cards',
            cards
        })
    })
}

function newCard(req, res) {
    res.render('cards/new');
}

function create(req, res) {
    let creditPullArr = [req.body.experian, req.body.equifax, req.body.transunion];

    let newCardObj = {
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

    Card.create(newCardObj, function(err, card){
        console.log(err)
        if(err) return res.redirect('/cards/new');
        res.redirect('/cards');
    })
   
}