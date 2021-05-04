# GA Project 2 - Credit Card Applications Tracker

## Swaroop's Credit Card Tracker
I manage credit card applications and details for a bunch of my family members. I had an excel spreadsheet that i use to manage this data. I constantly use it to great effect. So when there came time to think about Project 2 idea, i immediately gravitated to this. So i can create the app, use authentication for other family members to use the app themselves. I can share this to others to manage credit card information and events for their own family members. 

## Getting Started
**Heroku Link:**
- https://swaroop-cc-tracker.herokuapp.com

To start using the app, simply navigate to the heroku link, login with your gmail account. Then you can manage your and your family's credit cards, and build good credit habits, build an excellent score, and enjoy all the amazing credit card rewards like cash back and travel perks. 

## App Features
- Register Users / Delete Users 
- Add Cards for Registered Users
- Display Credit Card information in a sortable, searchable table format
- User tabs in the index page, for viewing cards for specific users
- Highlighting for Closed and Downgraded Cards
- Click Card Row to view Card Details 
- Add/Delete Notes to cards in the Card View
- Update card Details 
- Dark Mode Implementation

## Technologies Used
- HTML5
- CSS3
    - CSS Flexbox
    - CSS Grid
    - Bootstrap CDN
- Javascript
- jQuery
- jQuery DataTables
- AJAX
- MongoDB
- Node.JS
- Express.JS
- Passport.JS
- LocalStorage


## Other NPM Packages Used
- Mongoose
- Express-Session (For storing session cookie)
- EJS
- Bootstrap Icons
- Method-Override
- Morgan
- DotEnv (for setting the environment variables in the .env file)
- WebdriverIO (package that helps run automated tests)
- Chance (package that helps create random data)


## Wireframes 
These were the wireframes I created before starting to write any code for this project. 

### Main Screen
![mainscreenLayout](https://i.imgur.com/1JeTRBw.png)

### Add A Card Form 
![addACardForm](https://i.imgur.com/K8fqDqN.png)

### Add A User Form 
![addAUSerForm](https://i.imgur.com/mDpFxS2.png)


## ERD Diagram
- The Cards collection with have an embedded relationship with the Benefits schema
- The Cards collection with have a Referenced Relationship with the Users model

![erd](https://i.imgur.com/GR1ENea.png)

## App Screenshots

### Login Form
![loginForm](https://i.imgur.com/EbhTlcj.png)

### Cards Index Page
![cardIndexPage](https://i.imgur.com/QNlq8V4.png)

### Add Users Page
![Add Users](https://i.imgur.com/k26R7aD.jpg)

### Add Card Page
![Add Card](https://i.imgur.com/BjYzUD0.png)

### Card Details Show Page
![card show](https://i.imgur.com/qcfe3OT.png)


## App Screenshots - DARK MODE

### Login Form
![loginForm](https://i.imgur.com/x4Iw8Ri.png)

### Cards Index Page
![cardIndexPage](https://i.imgur.com/3O4eWjh.png)

### Add Users Page
![Add Users](https://i.imgur.com/c2woQe2.png)

### Add Card Page
![Add Card](https://i.imgur.com/vWdJCor.png)

### Card Details Show Page
![card show](https://i.imgur.com/3soZ8Zi.png)

## Challenges

### Create Card Adding Data was Cumbersome
**Problem**
- My create card form was quite a long one, so whenever i needed to create a card, it took quite a bit of my time in order to create a card. I need to automate this process.

**Solution**
- Imported an npm package called `webdriverIO` which is a testing framework. But can also be used to automate the web ui. 
- Wrote a `wdio script` for the addCard flow to quickly create card data whenever i needed it. 
- Also imported an npm package called `chance` that is super useful for creating random data. So i used the chance package to create a random credit card name, numbers and dates so I wouldn't have to submit any information for the `createCard script`
- DEMO SOLUTION!

### Create Card flow - User for a new card application could not be found
**Problem**
- When submitting new card form, Could not find user _id since it was not part of req.params
- So user information for a given card could not be displayed in the card main index page 

**Solution**
- Solved this issue by first using the `findOne()` method for finding the User based on first name and last name
- Then the entire code for `Model.create()` was run inside the findOne fucntion, so that i could pass in the user information for that card. 
- Solution code for the card create controller function below: 

```javascript 
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
```

## Future Enhancements

### Implement Authorization
- Future vision for this app is for the autheticated user to be the Family Admin. Each Family Admin can have their set of users (family members) they can manage. 

### Card Benefits 
- Incluse additinal module to view benefits for each card

### Login Strategies
- Implement Login Strategies for LinkedIn and Facebook as well
- Implement separate login functionality managed by the app itself. 

## Bugs
- Card View - Only first page , on click opend edit card page. Second, third page onwards don't click :/
- Editing user information in the edit card flow, actually just changes the name of the user in the user document. Instead of attaching the user ._id to the card applicant field
