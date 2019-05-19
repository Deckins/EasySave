import React, { Component } from 'react';
import piggy from '../images/piggybank.jpg';
import piggybank from '../images/piggy.jpg';
import ben100 from '../images/ben100.jpg';
import your_expenses from '../images/your_expenses.jpg';
import './Home.css';

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
                <p className='statement'> Save Easily with EasySave </p>
                </div>

                <section className= 'section'>
                <div className= 'divider'>

                {/*There will be 3 cards below that will be used to attract the users to
                  want to know more about EasySave.  Little details will be used, and
                  will get the users to want to learn more.*/}

                {/*The first little detail in the card.
                  EasySave will attract users by aiding them before retirement.
                  In fact, we are starting now so retirement will be easy for the users.*/}
                <div class='card'>
                <div class='image1'>
                <img className='piggybank' src={piggybank} alt='Here is a piggybank'/>
                </div>
                <div className='contain'>
                <div class='title1'>
                <h1 className= "titlename1"> Retirement</h1>
                </div>
                <div class='des1'>
                <p> Its never too early to think about retirement. Are you on track to a
                secure future? We can help you find out!
                <br/> <br/> <br/>
                </p>
                </div>
                </div>
                </div>

                {/*The second little detail in the card.
                  EasySave will attract users by helping them check their finances.*/}
                <div class='card'>
                <div class='image2'>
                <img className='your_expenses' src={your_expenses} alt='Here is your expense'/>
                </div>
                <div className='contain'>
                <div class='title2'>
                <h1 className= "titlename2"> Expenses </h1>
                </div>
                <div class='des2'>
                <p> Do you know how much you're spending on each month? Start calculating now and take control
                of your financial future.
                <br/> <br/> <br/>
                </p>
                </div>
                </div>
                </div>

                {/*The third little detail in the card.
                  Users would not know how much money should be saved.
                  EasySave will help users find out how much money should be saved,
                  in order for users to be able to spend money on the things they want. */}
                <div class='card'>
                <div class='image3'>
                <img className='ben100' src={ben100} alt='Here is a Benjamen Franklin'/>
                </div>
                <div className='contain'>
                <div class='title3'>
                <h1 className= "titlename3"> Success </h1>
                </div>
                <div class='des3'>
                <p> You'd be surprised how much you can save by setting aside money each week. Start setting goals now
                and finally get that new dinner table or flatscreen tv you've always wanted!
                </p>
                </div>
                </div>
                </div>

                </div>
                </section>

                </div>
              </div>
            </div>
        )
    }
}


export default Home;
