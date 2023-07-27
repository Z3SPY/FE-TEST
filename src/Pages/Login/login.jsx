import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import LoginPage from './loginTest/page';

function Login(props) {

 


  return (
    <LoginPage tryLoginFunction={props.loginFunction}/>
    
  );
}

export default Login;
/*
<div className="Login-Body">
        <div className="container-lg Login-Holder">

            <div class="container-title">
                <h1 class="display-4">Welcome Back</h1>
                <p>Sign in to your account.</p>
            </div>

            <div className="form-group">
                <label>Username or Email</label>
                <input type="email" class="form-control" id="userInputEmail" placeholder="ex: JohnDoe@email.com"></input>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="userInputPassword" placeholder="Enter Password"></input>
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="staySignedIn"></input>
                <label className="form-check-label check-state" for="exampleCheck1">Stay signed in</label>
                <a className="linkRegister">Make a new account</a>
            </div>

            
            <button type="button" class="btn btn-primary btn-lg btn-block submit-button" onClick={props.loginFunction}>Login</button>

        </div>
    </div>


*/