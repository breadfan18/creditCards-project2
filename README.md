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
- Dark Mode implementation

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




## Future Enhancements

### Implement Authorization
- Future vision for this app is for the autheticated user to be the Family Admin. Each Family Admin can have their set of users (family members) they can manage. 

### Card Benefits 
- Incluse additinal module to view benefits for each card

## Bugs
- Card View - Only first page , on click opend edit card page. Second, third page onwards don't click :/
- Editing user information in the edit card flow, actually just changes the name of the user in the user document. Instead of attaching the user ._id to the card applicant field
