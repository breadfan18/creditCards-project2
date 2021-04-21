const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const benefitsSchema = new Schema({
    purchaseProtection: {
        type: Boolean,
        default: true
    },
    carRentalCoverage: {
        type: Boolean,
        default: true
    },
    travelCredit: Number
})

const notesSchema = new Schema({
    note: String,
}, {
    timestamps: true,
});

const cardsSchema = new Schema({
    applicant: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    appDate: {
        type: Date,
        default: function () {
            return new Date();
        }
    },
    issuer: String,
    cardName: String,
    creditPull: [],
    annualFee: String,
    nextFeeDate: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        }
    },
    creditLine: String,
    bonusSpend: String,
    bonusSpendDate: Date,
    annualFee: String,
    benefits: [benefitsSchema],
    accountStatus: {
        type: String,
        enum: ['Active', 'Closed', 'Downgraded']
    },
    notes: [notesSchema],
}, {
    timestamps: true
})

module.exports = mongoose.model('Card', cardsSchema);