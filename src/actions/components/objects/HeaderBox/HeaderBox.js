import './HeaderBox.css';
const HeaderBox = ({headertext, headerbg, headercolor}) => {
    return ( 
        <div className='headerbox' style={{background: headerbg}}>
            <h3 style={{color: headercolor}}>{headertext}</h3>
        </div>
     );
}
 
export default HeaderBox;