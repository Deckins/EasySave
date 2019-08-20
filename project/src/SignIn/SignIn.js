import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import React, {Component} from 'react';
import './SignIn.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class SignIn extends Component{
    render() {

        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;

        if(user){
          // this.props.nameHandler(user.displayName)
        }
          return (
            <div>
            <div className="signin-img">
                <p className='text'>Easy Way, Easy Save</p>
            </div>

           <div className= "sign">
           <br/>
           <div className='body-container'>
               <br/> <br/>
               <p className='welcome'>Sign In for EasySave</p>


           </div>

           {/*Created a Instruction manuel for the users to follow using EasySave for the first time.
             Instructions are written below in order to be able to use EasySave.
             Users will click the button to sign in with their google account in order to go to the Firebase.*/}
           <div id= 'container'>
           <h1>Register for EasySave</h1>
           <p className = 'Register'>Follow the instruction below</p>
           <hr/>

           <p className = 'Register'> Welcome to EasySave! </p>
           <p className = 'Register'> To make things easy for you, you can track your finances by using your Google Account. </p>
           <p className = 'Register'> Once you sign in with your Google Account, you will be able to view your finances in our database. </p>
           <hr/>
            {
              user
                ? <h2>Hello, {user.displayName}</h2>
                : <h2> <p className= 'Click-to-log'> Click the button below to sign in with your Google Account to track your finances</p> </h2>
            }

            {/*Sign in button created so when the user click the button, their google account
              will be used to go on EasySave and view their finance database.*/}
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <p className= 'signin-button'> <button onClick={signInWithGoogle}> Sign In Now </button> </p>
            }

            </div>

            </div>
            </div>
          )

    }
}



const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({providers,firebaseAppAuth})(SignIn);
