const Card = require('../models/card');
const User = require('../models/user');

module.exports = {
    index,
    new: newCard,
    create,
    show,
    delete: deleteCard, 
    update
}

function index(req, res) {
    Card.find({}, function (err, cards) {
        User.find({}, function (err, users) {
            res.render('cards/index', {
                title: 'All Cards',
                cards, 
                users
            })
        })
    })
}

function newCard(req, res) {
    User.find({}, function (err, users) {
        res.render('cards/new', {
            users
        });
    })
}

function create(req, res) {
    let nameSplitArr = req.body.applicant.split(' ');
    User.findOne({
        firstName: nameSplitArr[0],
        lastName: nameSplitArr[1]
    }, function (err, user) {
        let newCardObj = {
            applicant: user._id,
            issuer: req.body.issuer,
            cardName: req.body.cardName,
            appDate: req.body.appDate,
            creditPull: [req.body.experian, req.body.equifax, req.body.transunion],
            nextFeeDate: req.body.nextFeeDate,
            creditLine: req.body.creditLine,
            bonusSpend: req.body.bonusSpend,
            bonusSpendDate: req.body.bonusSpendDate,
            annualFee: req.body.annualFee
        }
        Card.create(newCardObj, function(err, card){
            if(err) return res.redirect('/cards/new');
            res.redirect('/cards');
        })
    })

}

function show(req, res) {
    Card.findById(req.params.id, function (err, card) {
        User.find({}, function (err, users) {
            res.render('cards/show', {
                card,
                users
            })
        })
    })
    
}

function deleteCard(req, res) {
    Card.findByIdAndDelete(req.params.id, function(err, card) {
        res.redirect('/cards');
    })
}


function update(req, res) {
    let nameSplitArr = req.body.applicant.split(' ');

    let userObj = {
        firstName: nameSplitArr[0],
        lastName: nameSplitArr[1]
    }

    let cardObj = {
        appDate: req.body.appDate,
        bonusSpend: req.body.bonusSpend,
        bonusSpendDate: req.body.bonusSpendDate,
        annualFee: req.body.annualFee,
        accountStatus: req.body.accountStatus
    }

    Card.findByIdAndUpdate(req.params.id, cardObj, function (err, card) {
        User.findByIdAndUpdate(card.applicant, userObj, function (err, user) {
            res.redirect('/cards');
        })
        
    })
}

function splitFullName(fullName){
    let nameSplitArr = fullName.split(' ');
    return {
        firstName: nameSplitArr[0],
        lastName: nameSplitArr[1]   
    }
}