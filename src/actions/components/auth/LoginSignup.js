import { useState } from 'react';
import './LoginSignup.css';
import '../../styles/General.css';
import Label from '../../components/objects/Label/Label';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    // Get input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [drivingLicense, setDrivingLicense] = useState("");

    // Handle Login Button Action
    const handleLogin = () => {
        console.log("Login:", { username, password });
    };

    // Handle Sign Up Button Action
    const handleSignUp = () => {
        console.log("Sign Up:", { username, drivingLicense, password });
    };

    return ( 
        <div className='container'>
            <Label text={"DriveGuard"}/>

            <div className='tab-container'>
                <div className={action==="Sign Up"?"tab gray":"tab"} onClick={()=>{setAction("Login")}}>Login</div>
                <div className={action==="Login"?"tab gray":"tab"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                {action==="Login"?<div></div>:<div className='input'>
                    <input type='text' placeholder='Driving License Number' value={drivingLicense} onChange={(e) => setDrivingLicense(e.target.value)}/>
                </div>}
                
                <div className='input'>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}

            <div className='submit-container'>
                {action==="Login"?<button className='submit' onClick={() => {setAction("Login");handleLogin();}}>Login</button>:<div></div>}
                {action==="Sign Up"?<button className='submit' onClick={() => {setAction("Sign Up");handleSignUp();}}>Sign Up</button>:<div></div>}
            </div>

        </div>
     );
}
 
export default LoginSignup;