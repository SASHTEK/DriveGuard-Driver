import './Home.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';
import SmartCard from '../../components/objects/SmartCard/SmartCard';

const Home = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Welcome"}/>

            <div className='page-content'>

                <div className='offense-status'>
                    <SmartCard smarttitle={"Offense Level"} smartmessage={"This is the indication of your current offense level."} smartvalue={1} smarttitlebg={"blue"} smartboxbg={"rgb(220, 236, 240)"}/>
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
                
            </div>

           <TabNavigation bghome={"rgb(10, 55, 202)"}/>
            
        </div>
     );
}
 
export default Home;