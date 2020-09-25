import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig"
import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import "./Login.css"
import GoogleIcon from "../Image/Icon/google.png"
import FaceBookIcon from "../Image/Icon/fb.png"
import Header from './Header';
import BlackHeader from './BlackHeader';
import { travelContext } from '../App';
import { set } from 'date-fns';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig); 

const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const {signInUser} = useContext(travelContext)
    const [user, setUser] = signInUser;
    const [newUser, setNewUser] = useState(true);
    const newuserToggle = () => {
        setNewUser(!newUser);
    }
    const [submitForm, setSubmitForm] = useState({
        name: "",
        email: "",
        passowrd: "",
        message: ""
    })

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [name, setName] = useState("");
    const [tempUser, setTempUser] = useState({

        email: "",
        password: "",
    })
    const [error, setError] = useState({
        loginErrorMessage: "",
        nameError: "",
        emailError: "",
        PasswordError: "",
        confirmPasswordError: "",
    })
    const formInput = (e) => {
        let user = true;
        if(e.target.name === "fastName"){
            if(e.target.value === ""){
                const errorMessage = {...error}
                errorMessage.nameError = "Please write your name";
                setError(errorMessage)
            }
            else{
                const errorMessage = {...error}
                errorMessage.nameError = "";
                setError(errorMessage)
                const fname = e.target.value;
                setName(fname);
            }
        }
        
        if(e.target.name === "lastName"){
            const lname = e.target.value;
            const fullName = name + " " + lname
            setName(fullName);
        }
        if(e.target.name === "email"){
            if(e.target.value === ""){
                const errorMessage = {...error}
                errorMessage.emailError = "Please write your email";
                setError(errorMessage)
            }
            else{
                const errorMessage = {...error}
                errorMessage.emailError = "";
                setError(errorMessage)
                user = /\S+@\S+\.\S+/.test(e.target.value);
            }
        }
        if(e.target.name === "password"){
            if(e.target.value === ""){
                const errorMessage = {...error}
                errorMessage.passwordError = "Please write your password";
                setError(errorMessage)
            }
            else{
                const errorMessage = {...error}
                errorMessage.passwordError = "";
                setError(errorMessage)
                user = e.target.value.length > 8;
            }
        }
        if(e.target.name === "confirmPassword"){
            if(e.target.value === ""){
                const errorMessage = {...error}
                errorMessage.confirmPasswordError = "Please confirm your password";
                setError(errorMessage)
            }
        }    
        if(user){
            const newUser = {...tempUser};
            newUser[e.target.name] = e.target.value;
            setTempUser(newUser)
        }
    }
    const logOut = () => {
        firebase.auth().signOut().then(function() {
            const logOutUser = {
                name: "",
                statue: false,
                loginMessage: "Successfully logged out",
              };    
            setUser(logOutUser);
          }).catch(function(error) {
            console.log(error);
          });
    }
    const formSubmit = () => {
        
            if( newUser && tempUser.email && tempUser.password){
                if(tempUser.password === tempUser.confirmPassword){
                    firebase.auth().createUserWithEmailAndPassword(tempUser.email, tempUser.password)
                    .then(res => {
                        userName();
                        const newUser = {...user};
                        newUser.email = res.user.email;
                        newUser.statue = true;
                        newUser.loginMessage = "Successfully account created.";
                        newUser.name = name;
                        setUser(newUser)
                        history.replace(from);
                    })
                    .catch(function(error) {
                        // Handle Errors here.
                        const message = {...error};
                        message.loginErrorMessage = error.message;
                        // ...
                        setError(message);
                    });
                    }
                    else{
                        console.log("password does not match");
                    }
                }
                    if( newUser === false && tempUser.email && tempUser.password){
                        firebase.auth().signInWithEmailAndPassword(tempUser.email, tempUser.password)
                        .then(res => {
                            
                            const newUser = {...user};
                            newUser.name = res.user.displayName;
                            newUser.email = res.user.email;
                            newUser.statue = true;
                            newUser.loginMessage = "Successfully logged In."
                            setUser(newUser);
                            history.replace(from);
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            const message = {...error};
                            
                            message.loginErrorMessage = error.message;
                            // ...
                            setError(message);
                            // ...
                        });
                    }            
    }
    const userName = () => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
        displayName: name 
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });

    }
    const resetPassword = () => {
        const auth = firebase.auth();
        const emailAddress = tempUser.email;

        auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
        alert("Please Cheack Your Email Address.")
    }
    const loginWithgoogle = (e) => {
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const loggeduser = result.user;
            // ...
            const newUser = {...user};
            newUser.name = loggeduser.displayName;
            newUser.email = loggeduser.email;
            newUser.statue = true;
            newUser.loginMessage = "Successfully logged In.";
            console.log("google: ", newUser);         
            setUser(newUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          
    }
    const loginWithFb = (e) => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const loggeduser = result.user;
            // ...
            const newUser = {...user};
            newUser.name = loggeduser.displayName;
            newUser.email = loggeduser.email;
            newUser.statue = true;
            newUser.loginMessage = "Successfully logged In." 
            console.log("fb: ", newUser);          
            setUser(newUser);
            history.replace(from);
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(errorMessage, " code : ", errorCode); 
            // ...
          });
          
    }
    return (
        <Container maxWidth="lg">
            <BlackHeader/>
            <Grid container >
                <Grid item md={4}>
                </Grid>
                <Grid  item md={4}>
                    <Box className="loginForm">
                        <h2>Create an account</h2>
                        <form className= "userForm">
                            {
                                newUser && 
                                <>
                                    <TextField onBlur={formInput} fullWidth="true" color="primary" name="fastName" type="text" label="First Name"  required/>
                                    { error.nameError && <p className="errorMsg">{error.nameError}</p> }
                                    <TextField onBlur={formInput} fullWidth="true" color="primary" name="lastName" type="text" label="Last Name" />
                                </>
                            }
                            <TextField onBlur={formInput} fullWidth="true" color="primary" name="email" type="text" label="Username or Email" required />
                            { error.emailError && <p className="errorMsg">{error.emailError}</p> }
                            <TextField onBlur={formInput} fullWidth="true" color="primary" name="password" type="password" label="Password" required />
                            { error.passwordError && <p className="errorMsg">{error.passwordError}</p> }
                            {
                                newUser == false &&
                                <Box style={{marginTop:"10px"}}>
                                    <input type="checkbox" value="Remember me"/>Remember me
                                    <span onClick={resetPassword} style={{float:"right"}} className="loginText">Forget Passowrd</span>
                                </Box> 
                            }
                            {
                                newUser && <TextField onBlur={formInput} fullWidth="true" color="primary" name="confirmPassword" type="password" label="Confirm password" required />
                            }
                                {error.confirmPasswordError && <p className="errorMsg">{error.confirmPasswordError}</p>} 
                            {
                                user.statue ?
                                <Button onClick={logOut} variant="contained">Log Out</Button>
                                :
                                <Button onClick={formSubmit} variant="contained">{newUser ? "Create an account" : "Login"}</Button>
                                
                            }
                        </form>
                        {
                            newUser ? <h5 style={{textAlign:"center"}}>Already have an account ? <span className="loginText" onClick={newuserToggle}>Login</span></h5>
                            : <h5 style={{textAlign:"center"}}>Don't have an account ? <span className="loginText" onClick={newuserToggle}>Create an account</span></h5>
                        }
                        {
                            user.loginMessage && <p style={{color:"green", textAlign:"center"}}>{user.loginMessage}</p>
                        }
                        {
                            error.loginErrorMessage && <p style={{color:"red", textAlign:"center"}}>{error.loginErrorMessage}</p>
                        }
                    </Box>
                    <Box style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center" }}>Or</h4>
                        <button onClick={loginWithFb} className="socialLogin"> <img src={FaceBookIcon} alt=""/>Continue with facebook</button><br/>
                        <button onClick={loginWithgoogle} className="socialLogin"> <img src={GoogleIcon} alt=""/> Continue with google</button>
                    </Box>
                </Grid>
                <Grid item md={4}>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;