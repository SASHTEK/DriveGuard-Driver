import './LoginSignup.css'; 
const loginSignup = () => {
    return ( 
        <div className='container'>
            <div className='header'>
                <div className='text'>SignUp</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type='text'/>
                </div>
                <div className='input'>
                    <input type='text'/>
                </div>
                <div className='input'>
                    <input type='password'/>
                </div>
            </div>
            <div className='forgot-password'>Lost Password? <span>Click Here</span></div>
            <div className='submit-container'>
                <div className='submit'>Sign Up</div>
                <div className='submit'>Login</div>
            </div>
        </div>
     );
}
 
export default loginSignup;