import React from "react";
import "./alert-card.css";
import { acceptFine } from "../../../middleware/driverApis/alertApis";
import { ToastContainer, toast, Bounce } from 'react-toastify';


const AlertCard = ({
  fineName,
  fineDate,
  fineAmount,
  fineDescription,
  fineId,
}) => {
  // accept fine
  const acceptingFine = async(fineId) => {
    const loading = toast.loading("Accepting Offense");
    try{
        const response = await acceptFine(fineId);
        console.log(response)
        if(response.status === 200){
          toast.update(loading, {
            render: "Offence Accepted!",
            type: "success",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }else{
          toast.update(loading, {
            render: "Offence Accept Faild",
            type: "success",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
       

    }catch(err){
        console.error("Error fetcing data", err)
    }
  
  };

  //reject fine
  const rejectFine = (rejectFine) => {};

  return (
    <>
      <div className="alert-card-main-container">
        {/* first row */}
        <div className="ac-fr-container">
          <div>
            <h2 className="cf-heading">{fineName}</h2>
            <div className="date-back">
              <p className="cf-tag">{fineDate} </p>
            </div>
          </div>
          <div className="cf-heading"> {fineAmount} </div>
        </div>
        {/* second row */}
        <div className="ac-sr-container cf-para">{fineDescription}</div>
        {/* thrid row */}
        <div className="ac-tr-container">
          <button
            className="button-common acc-button"
            onClick={() => {
              acceptingFine(fineId);
            }}
          >
            Accept
          </button>
          <button className="button-common rej-button">Reject</button>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default AlertCard;
