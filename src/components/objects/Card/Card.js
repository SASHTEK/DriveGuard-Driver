import './Card.css';
const Card = ({subject, message, subbgcolor, subtextcolor, msgbgcolor, msgtextcolor, onClick}) => {
    return ( 
        <div className='card' onClick={onClick}>
            <div className='card-subject' style={{background: subbgcolor, color: subtextcolor}}>{subject}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message}</div>
            </div>
     );
}
 
export default Card;