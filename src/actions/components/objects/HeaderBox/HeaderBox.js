import './HeaderBox.css';
const HeaderBox = ({headertext, headerbg, headercolor}) => {
    return ( 
        <div className='headerbox' style={{background: headerbg}}>
            <h4 style={{color: headercolor}}>{headertext}</h4>
        </div>
     );
}
 
export default HeaderBox;