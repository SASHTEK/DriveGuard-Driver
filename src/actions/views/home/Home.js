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
                <Label text={"Welcome"} bgcolor={"rgb(52, 89, 253)"} textcolor={"white"}/>
            </div>

            <div className='offense-status'>
                <CounterBox text={'Offense Level'} number={2} bgcolor={"rgb(226, 228, 236)"} textcolor={"black"} roundcolor={"rgb(42, 26, 224)"} numbercolor={"white"} />
            </div>

            <div className='user-recommendation'>
                <Card subject={'Your are an Excellent Driver'} message={'Country needs polite drivers like you.'} />
            </div>

            <div className='offense-summary-container'>

                <div className='offense-acceptance'>
                    <CounterBox text={'Response Pending'} number={2} bgcolor={"rgb(255, 216, 216)"} textcolor={"black"} roundcolor={"red"} numbercolor={"white"} />
                </div>

                <div className='offense-summary'>

                </div>

            </div>
            <div className='navposition'><TabNavigation bghome={"rgb(10, 55, 202)"}/></div>
            
        </div>
     );
}
 
export default Home;