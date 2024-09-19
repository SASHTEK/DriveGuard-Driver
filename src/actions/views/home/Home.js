import './Home.css';
import TabNavigation from '../../components/navbar/TabNavigation';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';

const Home = () => {
    return ( 
        <div className="container">
            <div className='user-greet'>
                <HeaderBox headertext={"Welcome"}/>
            </div>

            <div className='offense-status'>
                <CounterBox text={'Offense Level'} number={1} bgcolor={"rgb(255, 255, 255)"} textcolor={"black"} roundcolor={"rgb(38, 22, 131"} numbercolor={"white"} />
            </div>

            <div className='user-recommendation'>
                <Card subject={'Your are an Excellent Driver'} message={'Country needs polite drivers like you.'} subbgcolor={"darkgreen"} subtextcolor={"White"} msgbgcolor={"green"} msgtextcolor={"White"}/>
            </div>

            <div className='offense-summary-container'>

                <div className='offense-acceptance'>
                    <CounterBox text={'Response Pending'} number={2} bgcolor={"rgb(255, 216, 216)"} textcolor={"black"} roundcolor={"red"} numbercolor={"white"} />
                </div>

                <div className='fine-due'>
                    <CounterBox text={'Fines to be Settled'} number={0} bgcolor={"lightgray"} textcolor={"black"} roundcolor={"darkgray"} numbercolor={"white"} />
                </div>

            </div>
            <div className='navposition-home'><TabNavigation bghome={"rgb(10, 55, 202)"}/></div>
            
        </div>
     );
}
 
export default Home;