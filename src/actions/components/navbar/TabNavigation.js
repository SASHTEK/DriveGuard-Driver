import './TabNavigation.css';
import navTabHome from '../../utils/images/nav-tab-home.png';
import navTabNew from '../../utils/images/nav-tab-new.png';
import navTabHistory from '../../utils/images/nav-tab-history.png';
import navTabSettings from '../../utils/images/nav-tab-settings.png';
const TabNavigation = () => {
    return (  
        <div className='nav-container'>
            <div className="nav-links">
                <img src={navTabHome} alt="Home tab buttion" />
                <a href="./actions/views/home/Home">Home</a>
            </div>
            <div className="nav-links">
                <img src={navTabNew} alt="New alert tab buttion" />
                <a href="./actions/views/new/New">Alerts</a>
            </div>
            <div className="nav-links">
                <img src={navTabHistory} alt="History tab buttion" />
                <a href="./actions/views/history/History">History</a>
            </div>
            <div className="nav-links">
                <img src={navTabSettings} alt="Settings tab buttion" />
                <a href="./actions/views/settings/Settings">Settings</a>
            </div>
        </div>
    );
}
 
export default TabNavigation;