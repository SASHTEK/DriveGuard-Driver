import './Card.css';
const Card = ({subject, message, subbgcolor, subtextcolor, msgbgcolor, msgtextcolor}) => {
    return ( 
        <div className='card'>
            <div className='card-subject' style={{background: subbgcolor, color: subtextcolor}}>{subject}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message}</div>
            </div>
     );
}
 
export default Card;