import './TabNavigation.css';
import navTabHome from '../../utils/images/nav-tab-home.png';
import navTabNew from '../../utils/images/nav-tab-new.png';
import navTabHistory from '../../utils/images/nav-tab-history.png';
import navTabSettings from '../../utils/images/nav-tab-settings.png';
import { Link } from 'react-router-dom';
const TabNavigation = ({bghome, bgnew, bghistory, bgsettings}) => {
    return ( 
        <div className='nav-bar'>
            <div className='nav-container'>
                <div className="nav-links" style={{background: bghome}}>
                    <Link to="/home"><img src={navTabHome} alt="Home tab button" />Home</Link>
                </div>

                <div className="nav-links" style={{background: bgnew}}>
                    <Link to="/new"><img src={navTabNew} alt="New alert tab button" />Alerts</Link>
                </div>

                <div className="nav-links" style={{background: bghistory}}>
                    <Link to="/history"><img src={navTabHistory} alt="History tab button" />History</Link>
                </div>
                
                <div className="nav-links" style={{background: bgsettings}}>
                    <Link to="/settings"><img src={navTabSettings} alt="Settings tab button" />Settings</Link>
                </div>
            </div>
        </div> 
    );
}
 
export default TabNavigation;