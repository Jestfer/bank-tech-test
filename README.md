Bank Tech Test
=================

## Description
* Bank Tech Test

## User Stories
```
As a customer
So that I can have money in my current account
I want to be able to deposit my money

As a customer
So that I can dispose of my money when I need to
I want to be able to withdraw my money

As a customer
So that I can see the status of my current account
I want to be able to print a statement (date, amount, balance)
```

## My approach

#### Pre-code:
* I set up the project using ESLint from the beginning for best practices purposes. Also, I decided to follow the Airbnb style guide for the same reason.
* Next, I diagrammed the different classes and methods needed for this project following the Domain Modelling approach.

Regarding the development process, I tried to stick to this flow as much as possible:
* Unit Tests
* Implementation
* Refactoring

#### Development:
1. I started by testing initialize properties for the Account class, making sure the infrastructure was correctly set up.
Then, I worked on the following features for the Account class to make sure that a customer can: deposit money and withdraw money. Always making sure I was doing TDD.

2. Then, I created a statementPrinter class that takes the history of one account and set it as a property of the new class.
Finally, its only method is in charge of printing the statement information for the customer.
First, I tested printing one transaction, and then several.

## Edge Cases:
* Customer can not withdraw more money than is available in the current account.

## Next focus:
* If I had time, I would have liked to also create a private function in the Account class. Something like **trackMovement** to process the data that is going to be pushed into the history per the given transaction.
* I would have liked to spend some more time on refactoring and thinking about other edge cases, like raising an exception if the amount passed is NaN.
* Finally, test coverage would have been nice as well.

## How to run
To run this app, just open ```index.html``` in your browser.

## How to run the tests
Everything required to run Jasmine is within the lib folder. You just need to open ```SpecRunner.html``` in your browser to run the tests.

## Screenshots
### Account:
------

![Account](/images/account.png?raw=true)

### Statement:
------

![Statement](/images/statement.png?raw=true)

## Technologies used
* ESLint (Airbnb style guide)
* HTML
* Jasmine
* Javascript
