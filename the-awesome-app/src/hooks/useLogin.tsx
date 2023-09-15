import axios from "axios";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import {useDispatch} from 'react-redux';
import { AuthState } from "../redux/authReducer";
import useTitle from "../hooks/useTitle";

function useLogin(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("info");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useTitle("Login");

    var x = 10;

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

    //useCallback stores a momoized copy of closeAlert
    const closeAlert = useCallback(function () {

        setMessage("");

    }, [message])

    const calculatedValue = useMemo( () => {

        console.log("calculatedValue");
        return "abc " + userName;
    }, [userName]);

    return [message, userName, setUserName, password, setPassword, 
                closeAlert, login, severity, calculatedValue] as const;
}

export default useLogin;