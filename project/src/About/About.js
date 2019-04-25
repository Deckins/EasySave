import React, {Component} from 'react';
import money from '../images/money.jpg';
import './About.css';
/*This will import the react features to customize the financial app*/
import {Card, CardDeck} from 'react-bootstrap';
class About extends Component {
    render() {
      return (
        /* create the image for the beginning of the page*/
        <div>
        <div className="bg-img">

        </div>

        <div className='body-wrapper'>
        <div className='body-container'>
            <img className='money' src={money} alt='Here is Money'/>
            <p className='statement'>About GoSave</p>
        </div>

        /* This is what our user will see to understand what our app is all about.*/
        /* -----------------------------------------------------------------------*/
        /*This part will talk about how our financial app works*/
       <CardDeck>
       <Card border ='success' bg="light" style={{ width: '20rem' }}>
       <Card.Header >Using our app</Card.Header>
       <Card.Body>
       <Card.Title>How does EasySave works?</Card.Title>
       <Card.Text>
       We total up and sort how much you spend every time you make a purchase.
       When you are done with your purchases we will store your data into a database in our app.
       We also have features in our app that will help you find out how much you spend quickly and efficiently.
       By using EasySave, we can help make your finances easy to follow and maintain.
       </Card.Text>
       </Card.Body>
       </Card>

       /*This part will help explain to the users why we created this app and it's purpose*/
       <Card border ='success' bg="light" style={{ width: '20rem' }}>
       <Card.Header >About EasySave</Card.Header>
       <Card.Body>
       <Card.Title>Why is EasySave created?</Card.Title>
       <Card.Text>
       Today, about more than 50% of the people don't have a budget.  We spend our money on unnecessary things.
       The problem with this is that it can really add up over the course of decades, which can really impede the retirement of many people.
       It is also reported that over 75% of full time workers in the US are living paycheck to paycheck. Many of these people have too many expenses.
       The worst case scenario is that people can go bankrupt because they don't know how to handle their money.
       With this problem arising, this is when our app will help dissolve your financial problems.
       </Card.Text>
       </Card.Body>
       </Card>

       /* This part will show users the features that we implemented in our financial app*/
       <Card border ='success' bg="light" style={{ width: '20rem' }}>
       <Card.Header >Features</Card.Header>
       <Card.Body>
       <Card.Title>What are the Features of EasySave?</Card.Title>
       <Card.Text>
       We implement a feature where you can take a photo of your receipt for those of you that are lazy to input your values in our app.
       We then use our image processing software that will populate the categories that you have spent your money on.
       After using your data we can then calculate average spending based on location to determine you are overspending or not.
       We  implement a savings feature where you can set a certain item you want to save for.
       Our app will tell you how much you need to save each week and for how long.
       </Card.Text>
       </Card.Body>
       </Card>

       </CardDeck>

       </div>
       </div>
   )

    }
}

export default About;
