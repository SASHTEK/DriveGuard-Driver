import './Label.css';
const Label = ({text,bgcolor,textcolor}) => {
    return ( 
        <div className='label' style={{ background: bgcolor}}>
                <h5 style={{color: textcolor}}>{text}</h5>
            </div>
     );
}
 
export default Label;