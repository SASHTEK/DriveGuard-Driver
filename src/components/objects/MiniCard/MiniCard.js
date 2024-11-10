import './MiniCard.css';
const MiniCard = ({subject, message, subbgcolor, subtextcolor, msgbgcolor, msgtextcolor, onClick}) => {
    return ( 
        <div className='minicard' onClick={onClick}>
            <div className='minicard-subject' style={{background: subbgcolor, color: subtextcolor}}>{subject}
            </div>
            <div className='minicard-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message}</div>
            </div>
     );
}
 
export default MiniCard;