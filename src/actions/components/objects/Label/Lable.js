import './Label.css';
const Label = ({text,bgcolor,textcolor}) => {
    return ( 
        <div className='label' style={{ background: bgcolor}}>
                <h4 style={{color: textcolor}}>{text}</h4>
            </div>
     );
}
 
export default Label;