import './TabNavigation.css';
import navTabHome from '../../utils/images/nav-tab-home.png';
import navTabNew from '../../utils/images/nav-tab-new.png';
import navTabHistory from '../../utils/images/nav-tab-history.png';
import navTabSettings from '../../utils/images/nav-tab-settings.png';
const TabNavigation = () => {
    return (  
        <div className='nav-container'>
            <div className="nav-links">
                <a href="./actions/views/home/Home"><img src={navTabHome} alt="Home tab buttion"/>Home</a>
            </div>

            <div className="nav-links">
                <a href="./actions/views/new/New"><img src={navTabNew} alt="New alert tab buttion"/>Alerts</a>
            </div>

            <div className="nav-links">
                <a href="./actions/views/history/History"><img src={navTabHistory} alt="History tab buttion"/>History</a>
            </div>
            
            <div className="nav-links">
                <a href="./actions/views/settings/Settings"><img src={navTabSettings} alt="Settings tab buttion"/>Settings</a>
            </div>
        </div>
    );
}
 
export default TabNavigation;