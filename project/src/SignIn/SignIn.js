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
               <p className='welcome'>Sign In</p>


           </div>

           <div id= 'container'>
           <h1>Register for EasySave</h1>
           <p>Follow the instruction below</p>
           <hr/>

           <p> Welcome to EasySave </p>
           <p> To make things easy for you, you can track your finances by using your Google Account </p>
           <p> Once you sign in with your Google Account, you will be able to view your finances in our database </p>
           <hr/>
            {
              user
                ? <h2>Hello, {user.displayName}</h2>
                : <h2> <p className= 'Click-to-log'> Click the button below to sign in with your Google Account to track your finances</p> </h2>
            }


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
