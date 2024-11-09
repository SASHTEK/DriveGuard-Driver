import './New.css';
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { useEffect, useState } from 'react';
import Card from '../../components/objects/Card/Card';
import { getFinesData, getFinesMatchStatus, getWitnessedFines } from '../../middleware/driverApis/alertApis';

const New = () => {

    const [switchTab,setSwitchTab] = useState("Fine");
    const [responseData, setResponseData] = useState([]);

    useEffect(()=>{
      
            const getFineData = async() =>{
                if(switchTab === "Offence"){
                    const response = await getFinesMatchStatus(localStorage.getItem("driverId"), "witnessed")
                    if(response !==null && response !== undefined && response.status === 200 ) {
                        setResponseData(response.data);
                    }else{
                        setResponseData([]);
                    }
                }
                else if(switchTab === "Fine"){
                    const response = await getFinesMatchStatus(localStorage.getItem("driverId"), "accepted")
                    if(response !==null && response !== undefined  && response.status === 200) {
                        setResponseData(response.data);
                    }else{
                        setResponseData([]);
                    }
                }
            
             
            }
        
        getFineData();
    },[switchTab])
    console.log(responseData)
    
    return ( 
        <div className="container">
            <HeaderBox headertext={"Alerts"}/>

            <div  style={{background: switchTab === "Fine" ? 'linear-gradient(to right, rgb(128, 188, 236), transparent)' : 'linear-gradient(to left, rgb(128, 188, 236), transparent)'}} className='page-content-new'> 

                <div className='new-tab-navigation-area'>
                    <div className='new-tab-container'>
                        <div className={switchTab==="Offense"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Offence")}}>Offense</div>
                        <div className={switchTab==="Fine"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Fine")}}>Fine</div>
                    </div>
                </div>

                <div className='new-data-view'>
                    {switchTab==="Offense"?<div></div>:
                    <div className="new-offense">
                        {/* Offense data display here. */}
                        {responseData.map(fine =>(
                            <div>
                                <Card key={fine.fineId} subject={fine.fineDate} message={fine.fineName}/>
                               
                            </div>
                        ))}

                       
                    </div>}

                    {switchTab==="Fine"?<div></div>:
                    <div className="new-fine">
                        {/* Fine data display here. */}
                        {responseData.map(fine =>(
                               <Card key={fine.fineId} subject={fine.fineDate} message={fine.fineName}/>
                        ))}
                    </div>}
                </div>

            </div> 

            <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default New;