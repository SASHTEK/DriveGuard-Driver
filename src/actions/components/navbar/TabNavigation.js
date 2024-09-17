import './TabNavigation.css';
const TabNavigation = () => {
    return (  
        <div className='nav-container'>
            <div className="nav-links">
                <a href="./actions/views/home/Home">Home</a>
            </div>
            <div className="nav-links">
                <a href="./actions/views/new/New">New</a>
            </div>
            <div className="nav-links">
                <a href="./actions/views/history/History">History</a>
            </div>
            <div className="nav-links">
                <a href="./actions/views/settings/Settings">Settings</a>
            </div>
        </div>
    );
}
 
export default TabNavigation;