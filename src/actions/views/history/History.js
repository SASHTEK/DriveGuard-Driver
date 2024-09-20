import './History.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import SmartCard from '../../components/objects/SmartCard/SmartCard';
const Histroty = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Offense History"}/>
            <div className='page-content'>
                <div className='indicator'>
                </div>
            </div>
            <TabNavigation bghistory={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Histroty;