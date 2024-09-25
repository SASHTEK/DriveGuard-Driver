import './Home.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';
import SmartCard from '../../components/objects/SmartCard/SmartCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


// Function to determine color change based on number of CounterBoxes
const getColorChange = (number) => {
    if (number > 0) {
        return {
            bgcolor: 'rgb(255, 216, 216)',
            roundcolor: 'Red',
        };
    } else {
        return {
            bgcolor: 'lightgray',
            roundcolor: 'darkgray',
        };
    }
};


const Home = () => {

    //Set user/ username
    const [user, setUser] = useState('Guest');


    // Color change with offense level
    const [smartValue, setSmartValue] = useState(0); //Offense level
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
                case 4:
                setRecommendation({
                    subject: 'You are prohibited from driving',
                    message: 'Your driving license has been temporarily suspended.',
                    subbgcolor: 'black',
                    msgbgcolor: 'rgb(75, 75, 75)',
                    smartboxbg: 'darkgray',
                    smarttitlebg: 'black',
                    pagecolor: 'linear-gradient(to bottom, black, transparent)'
                });
                break;
            default:
                break;
        }
    }, [smartValue]);

    
    //Color change based on number - CounterBoxes
    const [responsePending, setResponsePending] = useState(1); //for CounterBox: Response Pending
    const [finesToBeSettled, setFinesToBeSettled] = useState(0); //for CounterBox: Fines to be setteled

    const colorChange1 = getColorChange(responsePending); //for CounterBox: Response Pending
    const colorChange2 = getColorChange(finesToBeSettled); //for CounterBox: Fines to be setteled


    return ( 
        <div className="container">
            <HeaderBox headertext={"DriveGuard Home"}/>

            <div style={{background: recommendation.pagecolor}} className='page-content-home'>

                <div className='greet'>
                <h1>Welcome, <span>{user}</span></h1>
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
                    <Link to="/new"><CounterBox text={'Response Pending'} number={responsePending} bgcolor={colorChange1.bgcolor} textcolor={"black"} roundcolor={colorChange1.roundcolor} numbercolor={"white"} /></Link>
                    </div>

                    <div className='fine-due'>
                    <Link to="/new"><CounterBox text={'Fines to be Settled'} number={finesToBeSettled} bgcolor={colorChange2.bgcolor} textcolor={"black"} roundcolor={colorChange2.roundcolor} numbercolor={"white"} /></Link>
                    </div>
                
                </div>
                
            </div>

           <TabNavigation bghome={"rgb(10, 55, 202)"}/>
            
        </div>
     );
}
 
export default Home;
