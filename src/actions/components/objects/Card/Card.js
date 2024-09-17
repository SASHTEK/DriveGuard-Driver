import './Card.css';
const Card = ({subject, message}) => {
    return ( 
        <div className='card'>
            <div className='card-subject'>{subject}</div>
            <div className='card-message'>{message}</div>
            </div>
     );
}
 
export default Card;