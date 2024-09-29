import './LoginSignup.css';
import { useState } from 'react';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    // Get input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [drivingLicense, setDrivingLicense] = useState("");

    // Navigate to Home page
    const navigate = useNavigate();

    // Handle Login Button Action
    const handleLogin = () => {
        console.log("Login:", { username, password });
        navigate('/Home');
    };

    // Handle Sign Up Button Action
    const handleSignUp = () => {
        console.log("Sign Up:", { username, drivingLicense, password });
    };

    return ( 
        <div className='container'>
            <HeaderBox headertext={"DriveGuard"}/>

            <div className='page-content-login'>

                <div className='login-title'>
                    <h1>DriveGuard</h1>
                    <p>Your drive guide companion</p>

                </div>

                <div className='error-message'></div>

                <div className='elements'>

                    <div className='tab-container'>
                        <div className={action==="Sign Up"?"tab gray":"tab"} onClick={()=>{setAction("Login")}}>Login</div>
                        <div className={action==="Login"?"tab gray":"tab"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    </div>

                    <div className='inputs'>
                        {action==="Sign Up"?<div></div>:<div className='input'>
                            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>}
                        
                        {action==="Login"?<div></div>:<div className='input'>
                            <input type='text' placeholder='Driving License Number' value={drivingLicense} onChange={(e) => setDrivingLicense(e.target.value)}/>
                        </div>}
                        
                        {action==="Sign Up"?<div></div>:<div className='input'>
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>}
                    </div>
                    
                    {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}

                    <div className='submit-container'>
                        {action==="Login"?<button className='submit' onClick={() => {setAction("Login");handleLogin();}}>Login</button>:<div></div>}
                        {action==="Sign Up"?<button className='submit' onClick={() => {setAction("Sign Up");handleSignUp();}}>Sign Up</button>:<div></div>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginSignup;