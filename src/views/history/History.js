import './History.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
const Histroty = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Offense History"}/>
            <div className='page-content-history'>

                <div className='indicator'>
                    <h2>Offense Summary</h2>
                    <div className='offense-summary'>
                        <p>This is a test</p>
                        <p>This is a test</p>
                        <p>This is a test</p>
                        <p>This is a final</p>
                    </div>
                </div>

                <div className='history-list-view'>
                    <h2>Browse History</h2>
                    

                </div>

            </div>
            <TabNavigation bghistory={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Histroty;