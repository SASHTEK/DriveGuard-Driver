import './DetailBox.css'
function detailBox({ show, title, details, onAccept, onReject }) {
    if (!show) {
      return null;
    }
  
    return (
      <div className="detail-box">
        <div className="detail-box-content">
          <h2>{title}</h2>
          <p>{details}</p>
          <button className='on-click-proceed' onClick={onAccept}>Accept</button>
          <button className='on-click-cancel' onClick={onReject}>Reject</button>
        </div>
      </div>
    );
  }
  
  export default detailBox;