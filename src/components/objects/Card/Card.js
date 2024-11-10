import './Card.css';
const Card = ({subject, message, message2, message3, message4, message5, subbgcolor, subtextcolor, msgbgcolor, msgtextcolor, onOk, onCancel}) => {
    return ( 
        <div className='card'>
            <div className='card-subject' style={{background: subbgcolor, color: subtextcolor}}>{subject}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message2}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message3}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message4}</div>
            <div className='card-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message5}</div>
            <div className='card-button-area'>
                <button className="on-click-Ok" onClick={onOk}>Accept</button>
                <button className="on-click-Cancel" onClick={onCancel}>Reject</button>
            </div>
            
        </div>
     );
}
 
export default Card;