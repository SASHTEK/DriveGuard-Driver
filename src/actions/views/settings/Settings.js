import './Settings.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
const Settings = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Settings"}/>
            <div className='page-content'>
                
            </div>
            <TabNavigation bgsettings={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Settings;