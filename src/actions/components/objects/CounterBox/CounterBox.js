import './CounterBox.css';

const CounterBox = ({text, number}) => {
    return (  
        <div className='counter-box'>
            <div className='counter-box-text'>{text}</div>
            <div className='counter-box-number'>{number}</div>
        </div>
    );
}
 
export default CounterBox;