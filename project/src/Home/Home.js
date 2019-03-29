import React, {Component} from 'react';
import piggy from '../images/piggybank.jpg';
import './Home.css';
import {Card, CardDeck} from 'react-bootstrap';
class Home extends Component {
    render() {
        return (
            <div className='body-wrapper'>
            <div className='body-container'>
                <img className='piggy' src={piggy} alt='Here lies a piggy'/>
                <p className='statement'>What matters to You?</p>


            </div>
        <CardDeck>
        <Card border ='success' bg="light" style={{ width: '20rem' }}>
    <Card.Header >Retirement</Card.Header>
        <Card.Body>
        <Card.Title>Are you Ready?</Card.Title>
        <Card.Text>
        Its never too early to think about retirement. Are you on track to a
        secure future? We can help you find out!
        </Card.Text>
        </Card.Body>
        </Card>

        <Card border ='success' bg="light" style={{ width: '20rem' }}>
    <Card.Header >Expenses</Card.Header>
        <Card.Body>
        <Card.Title>Concerned about Debt?</Card.Title>
        <Card.Text>
        Do you know how much you're spending on each month? Start calculating now and take control
        of your financial future.
        </Card.Text>
        </Card.Body>
        </Card>


        <Card border ='success' bg="light" style={{ width: '20rem' }}>
    <Card.Header >Success</Card.Header>
        <Card.Body>
        <Card.Title>Do you want to accumulate Wealth?</Card.Title>
        <Card.Text>
        You'd be surprised how much you can save by setting aside money each week. Start setting goals now
        and finally get that new dinner table or flatscreen tv you've always wanted!
        </Card.Text>
        </Card.Body>
        </Card>

        </CardDeck>
        </div>
    )
    }
}

export default Home;