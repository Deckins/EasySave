import React, {Component} from 'react';
import money_bag from '../images/money_bag.jpg';
import cash from '../images/cash.jpg';
import finance_features from '../images/finance_features.jpg';
import './About.css';

{/*This About page for people to view about EasySave.
  It explains the objective of what EasySave is and why users should use our product*/}
class About extends Component {
    render() {
      return (

        <div>
        <div className="aboutimg">
        <p className= 'text-title'>  Emergence of EasySave </p>
        </div>

        <div className= 'main'>

            <div className='firstcontainer'>
              <div className='info'>
              {/*This section explains about EasySave.*/}
                <h1 class= 'info-text'>About EasySave </h1>
              <div className='mission-info'>
                <p className= 'aboutinfo'> Our favorite word is Easy and we like everything easy.
                For the most part,Finances and Easy are two words that do not go well together
                and we would like to make finances easy for you.
                We do that by creating a website and app to make your finance tracking Simple and Easy.
                Saving money is not easy and EasySave will help make it Easy.
                It is what drives us to help make your finances as easy as it can be.
                </p>
                <p className= 'inspire'> Inspired by three College Students trying to live a easy financial life </p>
                </div>
              </div>
            </div>

        </div>

        {/*This is what our user will see to understand what our app is all about.*/}
        {/*It will explain about how our financial app works.*/}
       <section>
       <div className='features'>
       <div className= 'detail1'>
        <div className= 'detail1-container'>
          <div className= 'detail1-row'>
              <img className='cash' src={cash} alt='Here is Cash'/>
              <div className= 'detail1-textbox'>
              <p className= 'detail1-title'>
              How does EasySave works?
              </p>

              <p className= 'detail1-info'>
              We total up and sort how much you spend every time you make a purchase.
              When you are done with your purchases we will store your data into a database in our app.
              We also have features in our app that will help you find out how much you spend quickly and efficiently.
              By using EasySave, we can help make your finances easy to follow and maintain.
              </p>

            </div>
          </div>
        </div>
       </div>
       </div>

       {/*This part will help explain to the users why we created this app.*/}
       <div className='features2'>
       <div className= 'detail2'>
        <div className= 'detail2-container'>
          <div className= 'detail2-row'>
              <img className='money_bag' src={money_bag} alt='Here is a money_bag'/>
              <div className= 'detail2-textbox'>
              <p className= 'detail2-title'>
              How was EasySave created?
              </p>

              <p className= 'detail2-info'>
              Today, about more than 50% of the people don't have a budget.  We spend our money on unnecessary things.
              The problem with this is that it can really add up over the course of decades,
              which can really impede the retirement of many people.
              It is also reported that over 75% of full time workers in the US are living paycheck to paycheck.
              Many of these people have too many expenses.
              The worst case scenario is that people can go bankrupt because they don't know how to handle their money.
              With this problem arising, this is when our app will help dissolve your financial problems and mae your financial life easy.
              </p>

            </div>
          </div>
        </div>
       </div>
       </div>

       {/*This part will show users the features that we implemented in our financial app.
         This can also be used in our andriod app. */}
       <div className='features3'>
       <div className= 'detail3'>
        <div className= 'detail3-container'>
          <div className= 'detail3-row'>
              <img className='finance_features' src={finance_features} alt='Here are Finance Features'/>
              <div className= 'detail3-textbox'>
              <p className= 'detail3-title'>
              What are the Features of EasySave?
              </p>

              <p className= 'detail3-info'>
              We implement a feature where you can take a photo of your receipt for those of you that are lazy to input your values in our app.
              We then use our image processing software that will populate the categories that you have spent your money on.
              After using your data we can then calculate average spending based on location to determine you are overspending or not.
              We  implement a savings feature where you can set a certain item you want to save for.
              Our app will tell you how much you need to save each week and for how long.
              </p>

            </div>
          </div>
        </div>
       </div>
       </div>
       </section>


      {/*This div below closes out the entire div*/}
       </div>
   )

    }
}

export default About;
