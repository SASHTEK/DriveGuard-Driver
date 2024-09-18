import './CounterBox.css';

const CounterBox = ({text, number, bgcolor,textcolor, roundcolor, numbercolor}) => {
    return (  
        <div className='counter-box' style={{background: bgcolor}}>
            <div className='counter-box-text' style={{color: textcolor}}>{text}</div>
            <div className='counter-box-number' style={{background: roundcolor, color: numbercolor}}>{number}</div>
        </div>
    );
}
 
export default CounterBox;