import './DataCard.css';
const DataCard = ({subject, message, message2, message3, subbgcolor, subtextcolor, msgbgcolor, msgtextcolor}) => {
    return ( 
        <div className='Datacard'>
            <div className='Datacard-subject' style={{background: subbgcolor, color: subtextcolor}}>{subject}</div>
            <div className='Datacard-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message}</div>
            <div className='Datacard-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message2}</div>
            <div className='Datacard-message' style={{background: msgbgcolor, color: msgtextcolor}}>{message3}</div>
        </div>
     );
}
 
export default DataCard;