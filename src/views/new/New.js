import './New.css';
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { useState } from 'react';

const New = () => {

    const [switchTab,setSwitchTab] = useState("Fine");
    
    return ( 
        <div className="container">
            <HeaderBox headertext={"Alerts"}/>

            <div  style={{background: switchTab === "Fine" ? 'linear-gradient(to right, rgb(128, 188, 236), transparent)' : 'linear-gradient(to left, rgb(128, 188, 236), transparent)'}} className='page-content-new'> 

                <div className='new-tab-navigation-area'>
                    <div className='new-tab-container'>
                        <div className={switchTab==="Offense"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Fine")}}>Offense</div>
                        <div className={switchTab==="Fine"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Offense")}}>Fine</div>
                    </div>
                </div>

                <div className='new-data-view'>
                    {switchTab==="Offense"?<div></div>:
                    <div className="new-offense">
                        {/* Offense data display here. */}
                    </div>}

                    {switchTab==="Fine"?<div></div>:
                    <div className="new-fine">
                        {/* Fine data display here. */}
                    </div>}
                </div>

            </div> 

            <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default New;