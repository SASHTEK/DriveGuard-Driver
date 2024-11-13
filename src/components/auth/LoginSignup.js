import './LoginSignup.css';
import { useState } from 'react';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import { useNavigate } from 'react-router-dom';
import { driverLogin } from '../../middleware/driverApis/login';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");

    // Get input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [drivingLicense, setDrivingLicense] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    // Navigate to Home page
    const navigate = useNavigate();

    // Handle Login Button Action
    const handleLogin = async () => {
        await login(username, password);
    };
    
    // login function
    const login = async (username, password) => {
        try {
            if (username && password) {
                const response = await driverLogin(username, password);
                if(response !== undefined) {
                    if (response.status === 200) {
                        const userId = response.data.driverId; 
                        localStorage.setItem('driverId', userId);
                        navigate('/home');
                    }
                } else {
                    setAlertMessage("Incorrect Username or Password!");
                }
            } else {
                console.log("Username and Password are required.");
                setAlertMessage("Username and Password cannot be empty!");
            }
        } catch (err) {
            console.error("Error calling backend login function: ", err);
            setAlertMessage("Login failed due to an error. Please try again.");
        }
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

                {alertMessage && <div className='error-message'>{alertMessage}</div>}

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