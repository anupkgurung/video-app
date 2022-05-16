import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Footer } from "../../components";
import { useAuthentication } from "../../context";
import "../auth.css";
import { useDocumentTitle } from "../../customHooks";


export const Signup = () => {
    useDocumentTitle("Signup");
    const [showPassword, setShowPassword] = useState(false);
    const [userCredentials, setUserCredentials] = useState({
        firstName : "", lastName : "",password : "",email :"",
        confirmPassword:""
    });
    const navigateTo = useNavigate();

    const handleShowPassword = () =>{
        setShowPassword((showPassword) => !showPassword);
    }
    const { setUserData } = useAuthentication();
    const handleSignup = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("/api/auth/signup",userCredentials);
            const { encodedToken } = data
            localStorage.setItem("token",encodedToken);
            encodedToken ? data.isLogin = true : data.isLogin = false;
            setUserData(data);
            navigateTo("/")
        }catch({response}){
            console.log(response.data.errors);
        }
    }
    const handleChange = (e) => {
        const { id,value } = e.target;
        setUserCredentials(userCredentials => ({
            ...userCredentials,
            [id] : value
        }))
    }
    return (
        <>
        <div id="main" className="signup-container">
            <form className="signup-form flex-col">
            <div className="text-center">
                <h4>Sign Up</h4>
            </div>   
              <Input
                    id="firstName"
                    title="First Name"
                    type="text"
                    onChange={handleChange}
                    value={userCredentials.firstName}
                    placeholder="First Name"
                    hasAutoComplete={false}
                    isRequired={true}
                />

                <Input
                    id="lastName"
                    title="Last Name"
                    type="text"
                    onChange={handleChange}
                    value={userCredentials.lastName}
                    placeholder="Last Name"
                    hasAutoComplete={false}
                    isRequired={true}
                />

                <Input
                    id="email"
                    title="Email"
                    type="email"
                    onChange={handleChange}
                    value={userCredentials.email}
                    placeholder="username@email.com"
                    hasAutoComplete={false}
                    isRequired={true}
                />

                <Input
                    id="password"
                    title="Password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={userCredentials.password}
                    placeholder="Enter your password"
                    hasAutoComplete={false}
                    isRequired={true}
                />                

                <Input
                    id="confirmPassword"
                    title="Confirm Password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={userCredentials.confirmPassword}
                    placeholder="Confirm your password"
                    hasAutoComplete={false}
                    isRequired={true}
                />

                <Input
                    id="show-password"
                    title="Show Password"
                    type="checkbox"
                    onChange={handleShowPassword}
                />

                <button onClick={handleSignup} className="btn btn-primary w-100 login-btn">Create Account</button>    
            </form>
        </div>
        <Footer />
        </>
    )
}