import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
import {useDispatch} from 'react-redux';
import { AuthState } from "../redux/authReducer";

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("info");
    const dispatch = useDispatch();

    const navigate = useNavigate();

    async function login(){
        if(userName && password){
           
            setMessage("");

            try {
                
                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: userName, password: password});
                const state: AuthState = {
                    isAuthenticated: true,
                    userName: userName,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }
                dispatch({type: "SET_AUTH", payload: state});

                navigate("/products");

            } catch (error) {

                const state: AuthState = {
                    isAuthenticated: false,
                    userName: "",
                    accessToken: "",
                    refreshToken: ""
                }
                dispatch({type: "SET_AUTH", payload: state});
                setMessage("Invalid credentials");
                setSeverity("error");
            }

        }
        else{
            //alert("Please enter the credentials");
            setMessage("Please enter the credentials");
            setSeverity("warning");
        }
    }

    function closeAlert(){
        setMessage("");
    }

    return (
        <div>
            <h3>Login</h3>

            {message ? <Alert message={message} severity={severity} /> : null}

            

            <div className="form-group">
                <label>User Name</label>
                <input className="form-control" value={userName} onChange={e => setUserName(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" 
                                            value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-success" onClick={login}>Login</button>
            </div>
        </div>
    )
}
export default Login;