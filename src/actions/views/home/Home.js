import TabNavigation from '../../components/navbar/TabNavigation';
import './Home.css';
import '../../styles/General.css';
import CounterBox from '../../components/objects/CounterBox/CounterBox';
import Card from '../../components/objects/Card/Card';
import Label from '../../components/objects/Label/Lable';

const Home = () => {
    return ( 
        <div className="container">
            <div className='user-greet'>
                <Label text={"Welcome"} bgcolor={"white"} textcolor={"rgb(12, 6, 88)"}/>
            </div>

            <div className='offense-status'>
                <CounterBox text={'Offense Level'} number={2} bgcolor={"white"} textcolor={"black"} roundcolor={"rgb(42, 26, 224)"} numbercolor={"white"} />
            </div>

            <div className='user-recommendation'>
                <Card subject={'Your are an Excellent Driver'} message={'Country needs polite drivers like you.'} />
            </div>

            <div className='offense-summary-container'>

                <div className='offense-acceptance'>
                    <CounterBox text={'Not Responded'} number={2} bgcolor={"white"} textcolor={"black"} roundcolor={"darkred"} numbercolor={"white"} />
                </div>

                <div className='offense-summary'>

                </div>

            </div>

            <TabNavigation/>
        </div>
     );
}
 
export default Home;