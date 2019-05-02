import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import React, {Component} from 'react';
import './SignIn.css';
import {Jumbotron} from 'react-bootstrap';

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
            <div className="bg-img">
                <p className='text'>Easy Way, Easy Save</p>
            </div>

           <div id = "sign">
           <br/>
           <div className='body-container'>
               <br/> <br/>
               <p className='welcome'>Sign In</p>


           </div>

           <Jumbotron>
            <div>
                  {
              user
                ? <h2>Hello, {user.displayName}</h2>
                : <h2> <center> Welcome to EasySave, Click the button to sign in </center> </h2>
            }

            <br/>

            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <center> <bold> <button onClick={signInWithGoogle}> Sign in with Google </button> </bold> </center>
            }
            </div>
            </Jumbotron>;

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
