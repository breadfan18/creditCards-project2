const Card = require('../models/card');
const User = require('../models/user');

module.exports = {
    index,
    new: newCard,
    create,
    show
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
    res.render('cards/show');
    
}