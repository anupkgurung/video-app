import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import {useDocumentTitle } from "../../customHooks";
import { useAuthentication } from "../../context";
import "../auth.css";

export const Login = () => {
    useDocumentTitle("Login");
    const [userCredentials, setUserCredentials] = useState({
        email: "", password: "",
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserCredentials(userCredentials => ({
            ...userCredentials,
            [id]: value
        }))
    }
    const { setUserData } = useAuthentication();
    const navigateTo = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/auth/login", userCredentials);
            const { encodedToken } = data;
            localStorage.setItem("token", encodedToken);
            encodedToken ? data.isLogin = true : data.isLogin = false;
            setUserData(data);
            navigateTo("/");
        }catch({response}){
            console.log(response.data.errors);
        }
    }
    return (
        <div id="main" className="login-container">
            <form className="login-form flex-col">
                <div className="text-center">
                    <h4>Login</h4>
                </div>

                <Input
                    id="email"
                    title="Email"
                    type="email"
                    onChangeHandler={handleChange}
                    value={userCredentials.email}
                    placeholder="username@email.com"
                    hasAutoComplete={false}
                    isRequired={true}
                />

                <div>
                    {/* <div className="flex-row margin-btm-2 padding-top-4">
                        <label htmlFor="password">Password</label>
                        <Link className="link-style-none forgot-password" to="/">Forgot Password</Link>
                    </div> */}
                    <Input
                        id="password"
                        title="Password"
                        type="password"
                        onChangeHandler={handleChange}
                        value={userCredentials.password}
                        placeholder="password"
                        hasAutoComplete={false}
                        isRequired={true}
                        hasOnlyInput={true}
                    />
                </div>
                <div className="remember-credentials-check flex-row padding-top-2">
                    <input type="checkbox" id="remember" className="checkbox" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <div className="">
                    <button className="btn btn-primary w-100 login-btn" onClick={handleLogin} >Login</button>
                </div>
                <div className="sign-up flex-row flex-center margin-top-2">
                    <label htmlFor="">Doesn’t have an account yet?</label>
                    <Link to="/signup">Signup</Link>
                </div>
            </form>
        </div>
    )
}