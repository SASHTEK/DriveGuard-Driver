import TabNavigation from '../../components/navbar/TabNavigation';
import './Home.css';
import '../../styles/General.css';
import CounterBox from '../../components/objects/CounterBox/CounterBox';

const Home = () => {
    return ( 
        <div className="container">
            <div className='user-greet'>
                <h4>Welcome, <span>Name</span></h4>
            </div>

            <div className='offense-status'>
            <CounterBox text={'Offense Level'} number={2} />
            </div>

            <div className='user-recommendation'>
            <div className='user-recommendation-message'>Your are an Excellent Driver</div>
            <div className='user-recommendation-comment'>Country needs polite drivers like you.</div>
            </div>

            <div className='offense-summary-container'>

                <div className='offense-acceptance'>
                    <CounterBox text={'Not Responded'} number={2} />
                </div>

                <div className='offense-summary'>

                </div>

            </div>

            <TabNavigation/>
        </div>
     );
}
 
export default Home;