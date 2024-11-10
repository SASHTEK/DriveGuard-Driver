// Your (Ayesh) codes

// import './New.css';
// import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
// import TabNavigation from "../../components/navbar/TabNavigation";
// import { useEffect, useState } from 'react';
// import Card from '../../components/objects/Card/Card';
// import { getFinesData, getFinesMatchStatus } from '../../middleware/driverApis/alertApis';
// import detailBox from '../../components/objects/DetailBox/DetailBox';

// const New = () => {

//     const [switchTab,setSwitchTab] = useState("Fine");
//     const [responseData, setResponseData] = useState([]);

//     useEffect(()=>{

//             const getFineData = async() =>{
//                 if(switchTab === "Offence"){
//                     const response = await getFinesMatchStatus(localStorage.getItem("driverId"), "witnessed")
//                     if(response !==null && response !== undefined && response.status === 200 ) {
//                         setResponseData(response.data);
//                     }else{
//                         setResponseData([]);
//                     }
//                 }
//                 else if(switchTab === "Fine"){
//                     const response = await getFinesMatchStatus(localStorage.getItem("driverId"), "accepted")
//                     if(response !==null && response !== undefined  && response.status === 200) {
//                         setResponseData(response.data);
//                     }else{
//                         setResponseData([]);
//                     }
//                 }
//             }

//         getFineData();
//     },[switchTab])

//     // card click function

//     return (
//         <div className="container">
//             <HeaderBox headertext={"Alerts"}/>

//             <div  style={{background: switchTab === "Fine" ? 'linear-gradient(to right, rgb(128, 188, 236), transparent)' : 'linear-gradient(to left, rgb(128, 188, 236), transparent)'}} className='page-content-new'>

//                 <div className='new-tab-navigation-area'>
//                     <div className='new-tab-container'>
//                         <div className={switchTab==="Offense"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Offence")}}>Offense</div>
//                         <div className={switchTab==="Fine"?"tab gray-new":"tab-new"} onClick={()=>{setSwitchTab("Fine")}}>Fine</div>
//                     </div>
//                 </div>

//                 <div className='new-data-view'>
//                     {<div className="new-offense">
//                         {/* Offense data display here. */}
//                         {responseData.map(fine =>(
//                                 <Card key={fine.fineId} subject={fine.fineDate} message={fine.fineName}/>
//                         ))}
//                     </div>
//                     }

//                 </div>

//             </div>

//             <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
//         </div>
//      );
// }

// export default New;

//My (Shashika) original code

import "./New.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { useEffect, useState } from "react";
import Card from "../../components/objects/Card/Card";
import DetailBox from "../../components/objects/DetailBox/DetailBox";
import { getFinesMatchStatus } from "../../middleware/driverApis/alertApis";

const New = () => {
  const [switchTab, setSwitchTab] = useState("Fine");
  const [responseData, setResponseData] = useState([]);
  //Offence Area
  //Show Detail Box - Offence
  const [showDetailBoxOffence, setShowDetailBoxOffence] = useState(false);

  //Handle Display Detail Box - Offence
  const handleOpenDetailBoxOffence = () => {
    setShowDetailBoxOffence(true);
    
  };

  //Accept button action - Display box - offence
  const handleAcceptButtonOffence = () => {
    setShowDetailBoxOffence(false);
  };

  //Reject button action - Display box - offence
  const handleRejectButtonOffence = () => {
    setShowDetailBoxOffence(false);
  };

  //Fine Area
  //Show Detail Box - Fine
  const [showDetailBoxFine, setShowDetailBoxFine] = useState(false);

  //Handle Display Detail Box - Fine
  const handleOpenDetailBoxFine = () => {
    setShowDetailBoxFine(true);
  };

  //Accept button action - Display box - Fine
  const handleAcceptButtonFine = () => {
    setShowDetailBoxFine(false);
  };

  //Reject button action - Display box - Fine
  const handleRejectButtonFine = () => {
    setShowDetailBoxFine(false);
  };

  useEffect(() => {
    const getFineData = async () => {
      if (switchTab === "Fine") {
        const response = await getFinesMatchStatus(
          localStorage.getItem("driverId"),
          "witnessed"
        );
        if (
          response !== null &&
          response !== undefined &&
          response.status === 200
        ) {
          setResponseData(response.data);
        } else {
          setResponseData([]);
        }
      } else if (switchTab === "Offense") {
        const response = await getFinesMatchStatus(
          localStorage.getItem("driverId"),
          "accepted"
        );
        if (
          response !== null &&
          response !== undefined &&
          response.status === 200
        ) {
          setResponseData(response.data);
        } else {
          setResponseData([]);
        }
      }
    };

    getFineData();
  }, [switchTab]);

  console.log(responseData);

  // card click function
  return (
    <div className="container">
      <HeaderBox headertext={"Alerts"} />

      <div
        style={{
          background:
            switchTab === "Fine"
              ? "linear-gradient(to right, rgb(128, 188, 236), transparent)"
              : "linear-gradient(to left, rgb(128, 188, 236), transparent)",
        }}
        className="page-content-new"
      >
        <div className="new-tab-navigation-area">
          <div className="new-tab-container">
            <div
              className={switchTab === "Offense" ? "tab gray-new" : "tab-new"}
              onClick={() => {
                setSwitchTab("Fine");
              }}
            >
              Offense
            </div>
            <div
              className={switchTab === "Fine" ? "tab gray-new" : "tab-new"}
              onClick={() => {
                setSwitchTab("Offense");
              }}
            >
              Fine
            </div>
          </div>
        </div>

        <div className="new-data-view">
          {switchTab === "Offense" ? (
            <div></div>
          ) : (
            <div className="new-offense">
              {/* Offense data display here. */}
              {responseData.map((fine) => (
                <div key={fine.fineId}>
                  <Card
                    subject={fine.fineDate}
                    message={fine.fineName}
                    message2={"Detail 2"}
                    message3={"Detail 3"}
                    message4={"Detail 4"}
                    message5={"Detail 5"}
                    msgtextcolor={"Black"}
                    msgbgcolor={"rgb(181, 181, 181)"}
                  />{" "}
                  {/*for Offences*/}
                  <DetailBox
                    show={showDetailBoxOffence}
                    title={fine.fineName}
                    details={fine.fineDescription}
                    fineId={fine.fineId}
                    onAccept={handleAcceptButtonOffence}
                    onReject={handleRejectButtonOffence}
                  />
                </div>
              ))}

            </div>
          )}

          {switchTab === "Fine" ? (
            <div></div>
          ) : (
            <div className="new-fine">
              {/* Fine data display here. */}
              {responseData.map((fine) => (
                <div key={fine.fineId}>
                  <Card
                    subject={fine.fineDate}
                    message={fine.fineName}
                    msgbgcolor={"rgb(205, 150, 13)"}
                    onClick={handleOpenDetailBoxOffence}
                  />{" "}
                  {/*for Offences*/}
                  <DetailBox
                    show={showDetailBoxOffence}
                    title={fine.fineName}
                    details={fine.fineDescription}
                    fineId={fine.fineId}
                    onAccept={handleAcceptButtonOffence}
                    onReject={handleRejectButtonOffence}
                  />
                </div>
              ))}
              ;
              {/* Offense data display here. */}
            </div>
          )}
        </div>
      </div>

      <TabNavigation bgnew={"rgb(10, 55, 202)"} />
    </div>
  );
};

export default New;
