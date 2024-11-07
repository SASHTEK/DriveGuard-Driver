import './Settings.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import { useNavigate } from 'react-router-dom';
const Settings = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/'); 
    };

    return ( 
        <div className="container">
            <HeaderBox headertext={"Settings"}/>
            <div className='page-content-settings'>
                <div className='Logout-area'>
                <button className='Logout' onClick={() => {handleLogout();}}>Log Out</button>
                </div>
            </div>
            <TabNavigation bgsettings={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Settings;