import './SmartCard.css';
const SmartCard = ({smarttitle, smartmessage, smartvalue, smartboxbg, smarttitlebg, smarttitletextcolor, smartmessagetextcolor, smartvaluecolor}) => {
    return ( 
        <div className="smart-card-container" style={{background: smartboxbg}}>
            <div className="smart-card-details">
                <div className="smart-card-title" style={{background: smarttitlebg, color: smarttitletextcolor}}>{smarttitle}</div>
                <div className="smart-card-message" style={{color: smartmessagetextcolor}}>{smartmessage}</div>
            </div>
            <div className="smart-card-value" style={{color: smartvaluecolor}}>{smartvalue}</div>
        </div>
     );
}
 
export default SmartCard;