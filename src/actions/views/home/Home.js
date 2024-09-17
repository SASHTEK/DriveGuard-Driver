import TabNavigation from '../../components/navbar/TabNavigation';
import './Home.css';
import '../../styles/General.css';

const Home = () => {
    return ( 
        <div className="container">
            <div className='user-greet'>
                <h4>Welcome, <span>Name</span></h4>
            </div>

            <div className='offense-status'>
                <div className='offense-status-text'>Offense Level</div>
                <div className='offense-status-level'>2</div>
            </div>

            <div className='user-recommendation'>
            <div className='user-recommendation-message'>Your are an Excellent Driver</div>
            <div className='user-recommendation-comment'>Country needs polite drivers like you.</div>
            </div>

            <div className='offense-summary-container'>

                <div className='offense-acceptance'>
                    <div className='offense-acceptance-label'>Not Responded Offense acceptances</div>
                    <div className='offense-acceptance-count'>2</div>
                </div>

                <div className='offense-summary'>

                </div>

            </div>

            <TabNavigation/>
        </div>
     );
}
 
export default Home;