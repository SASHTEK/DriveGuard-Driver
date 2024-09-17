import TabNavigation from '../../components/navbar/TabNavigation';
import './Home.css';
import '../../styles/General.css';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';

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
                <Card subject={'Your are an Excellent Driver'} message={'Country needs polite drivers like you.'} />
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