import React, { Component } from 'react';
import piggy from '../images/piggybank.jpg';
import './Home.css';
import { Card, CardDeck } from 'react-bootstrap';

{/*This is the home page of our website.
  It is the small details that will help attract users to our app.
  More details will be in the about page.*/}
class Home extends Component {
    render() {
        return (
            <div>
                <div className="bg-img">

                </div>

                <div className= 'intro'>
                <div className='body-wrapper'>
                <div className='body-container'>
                <img className='piggy' src={piggy} alt='Here is a piggy'/>
                <p className='statement'> Save Easily </p>
                </div>

                <section>
                <div className= 'divider'>

                {/*There will be 3 cards below that will be used to attract the users to
                  wanrt to know more about EasySave.  Little details will be used, and
                  will get the users to want to learn more.*/}
                <CardDeck>
                <Card border='success' bg="light" style={{ width: '20rem' }}>
                <span class='card1h'>
                <Card.Header >Retirement</Card.Header>
                </span>

                {/*The first little detail in the card*/}
                <span class='card1'>
                <Card.Body>
                <Card.Title>Are you Ready?</Card.Title>
                <Card.Text>
                Its never too early to think about retirement. Are you on track to a
                secure future? We can help you find out!
                </Card.Text>
                </Card.Body>
                </span>
                </Card>


                <Card border='success' bg="light" style={{ width: '20rem' }}>
                <span class='card2h'>
                <Card.Header >Expenses</Card.Header>
                </span>

                {/*The second little detail in the card*/}
                <span class='card2'>
                <Card.Body>
                <Card.Title>Concerned about Debt?</Card.Title>
                <Card.Text>
                Do you know how much you're spending on each month? Start calculating now and take control
                of your financial future.
                </Card.Text>
                </Card.Body>
                </span>
                </Card>


                <Card border='success' bg="light" style={{ width: '20rem' }}>
                <span class='card3h'>
                <Card.Header >Success</Card.Header>
                </span>

                {/*The third little detail in the card*/}
                <span class='card3'>
                <Card.Body>
                <Card.Title>Do you want to accumulate Wealth?</Card.Title>
                <Card.Text>
                You'd be surprised how much you can save by setting aside money each week. Start setting goals now
                and finally get that new dinner table or flatscreen tv you've always wanted!
                </Card.Text>
                </Card.Body>
                </span>
                </Card>
                </CardDeck>
                </div>
                </section>

                <br /> <br />

                </div>
              </div>
            </div>
        )
    }
}


export default Home;
