import useLogin from "../hooks/useLogin";
import Alert from "./Alert";


function Login(){

    //move the logic to the useLogin hook
    const  [message, userName, setUserName, password, setPassword, closeAlert, login, severity, calculatedValue] = useLogin();

    return (
        <div>
            <h3>Login</h3>

            {userName? <div>Calc Value: {calculatedValue}</div> : null}

            {message ? <Alert message={message} severity={severity} onClose={closeAlert}/> : null}

            

            <div className="form-group">
                <label>User Name</label>
                <input className="form-control" value={userName} 
                                    onChange={e => setUserName(e.target.value)}/>
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