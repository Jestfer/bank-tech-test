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
Then, I worked on the following features for the Account class, to make sure that a customer can: deposit money and withdraw money. Always making sure I was doing TDD.

2. [TBC]


## Edge Cases:
* Customer can not withdraw more money than is available in the current account.

## How to run
To run this app, just open ```index.html``` in your browser.

## How to run the tests
Everything required to run Jasmine is within the lib folder. You just need to open ```SpecRunner.html``` in your browser to run the tests.

## Screenshots
[TBC]

## Technologies used
* ESLint
* HTML
* Jasmine
* Javascript
