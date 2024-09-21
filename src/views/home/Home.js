import './Home.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';
import SmartCard from '../../components/objects/SmartCard/SmartCard';
import { useState, useEffect } from 'react';

const Home = () => {
    const [smartValue, setSmartValue] = useState(0);
    const [recommendation, setRecommendation] = useState({
        subject: '',
        message: '',
        subbgcolor: '',
        msgbgcolor: '',
        msgtextcolor: '',
        smartboxbg: '',
        smarttitlebg: '',
        pagecolor: 'linear-gradient(to bottom, rgb(240, 240, 240), transparent)'
    });

    useEffect(() => {
        switch (smartValue) {
            case 0:
                setRecommendation({
                    subject: 'You are an Excellent Driver',
                    message: 'The country needs polite drivers like you.',
                    subbgcolor: 'darkgreen',
                    msgbgcolor: 'green',
                    smartboxbg: 'lightgreen',
                    smarttitlebg: 'darkgreen',
                    pagecolor: 'linear-gradient(to bottom, green, transparent)'
                });
                break;
            case 1:
                setRecommendation({
                    subject: 'You are a Good Driver',
                    message: 'Your driving behavior will be exemplary to others.',
                    subbgcolor: 'darkblue',
                    msgbgcolor: 'rgb(1, 111, 236)',
                    smartboxbg: 'lightblue',
                    smarttitlebg: 'rgb(1, 111, 236)',
                    pagecolor: 'linear-gradient(to bottom, rgb(25, 132, 255), transparent)'
                });
                break;
            case 2:
                setRecommendation({
                    subject: 'You are a Bad Driver',
                    message: 'Keep away from driving for the good of others.',
                    subbgcolor: 'darkorange',
                    msgbgcolor: 'orange',
                    msgtextcolor: 'black',
                    smartboxbg: 'rgb(252, 210, 153)',
                    smarttitlebg: 'rgb(88, 83, 4)',
                    pagecolor: 'linear-gradient(to bottom, orange, transparent)'
                });
                break;
            case 3:
                setRecommendation({
                    subject: 'You are a Terrible Driver',
                    message: 'Don\'t drive. You need immediate medical treatment.',
                    subbgcolor: 'darkred',
                    msgbgcolor: 'red',
                    smartboxbg: 'rgb(255, 182, 193)',
                    smarttitlebg: 'darkred',
                    pagecolor: 'linear-gradient(to bottom, red, transparent)'
                });
                break;
            default:
                break;
        }
    }, [smartValue]);

    return ( 
        <div className="container">
            <HeaderBox headertext={"DriveGuard Home"}/>

            <div style={{background: recommendation.pagecolor}} className='page-content-home'>

                <div className='greet'>
                <h1>Welcome, <span>user</span></h1>
                </div>

                <div className='offense-status'>
                    <SmartCard 
                        smarttitle={"Offense Level"} 
                        smartmessage={"This is the indication of your current offense level."} 
                        smartvalue={smartValue}
                        smarttitlebg={recommendation.smarttitlebg} 
                        smartboxbg={recommendation.smartboxbg}
                        onChange={(value) => setSmartValue(value)}
                    />
                </div>

                <div className='user-recommendation'>
                    <Card 
                        subject={recommendation.subject} 
                        message={recommendation.message} 
                        subbgcolor={recommendation.subbgcolor} 
                        subtextcolor={"White"} 
                        msgbgcolor={recommendation.msgbgcolor} 
                        msgtextcolor={recommendation.msgtextcolor}
                    />
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
