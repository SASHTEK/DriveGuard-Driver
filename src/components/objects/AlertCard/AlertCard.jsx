import React from "react";
import "./alert-card.css";
import {
  acceptFine,
  rejectFine,
  makePayment,
} from "../../../middleware/driverApis/alertApis";
import { ToastContainer, toast, Bounce } from "react-toastify";
const driverId = parseInt(localStorage.getItem("driverId"), 10);

const AlertCard = ({
  fineName,
  fineDate,
  fineAmount,
  fineDescription,
  fineId,
  location,
  fineListId,
  officerFirstName, officerLastName
}) => {
  // accept fine
  const acceptingFine = async (fineId) => {
    const loading = toast.loading("Accepting Offense");
    try {
      const response = await acceptFine(fineId);
      if (response.status === 200) {
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
      } else {
        toast.update(loading, {
          render: "Offence Accept Faild",
          type: "error",
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
    } catch (err) {
      console.error("Error fetcing data", err);
    }
  };

  //reject fine
  const rejectingFine = async(fineId) => {
    const loading = toast.loading("Rejecting Offense");
    try{
      const response =  await rejectFine(fineId);
      // UI response
      if (response.status === 200) {
        toast.update(loading, {
          render: "Rejection Successful",
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
      } else {
        toast.update(loading, {
          render: "Rejection Error",
          type: "error",
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
      console.error("Error Rejecting Fine: ", err);
    }
  };

  // make payment
  const makingPayment = async (fineId, driverId, fineListId) => {
    
    const loading = toast.loading("Making Payment");
    try {
      const response = await makePayment(fineId, driverId, fineListId);
      // UI response
      if (response.status === 200) {
        toast.update(loading, {
          render: "Payment Successful",
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
      } else {
        toast.update(loading, {
          render: "Payment Error",
          type: "error",
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
    } catch (err) {
      console.error("error backend request: ", err);
    }
  };

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
        <div className="ac-sr-container cf-para">{fineDescription}

          <p>Officer Name : {`${officerFirstName} ${officerLastName}`}</p>
        </div>
        {/* thrid row */}
        {location === "offense" ? (
          <div className="ac-tr-container">
            <button
              className="button-common acc-button"
              onClick={() => {
                acceptingFine(fineId);
              }}
            >
              Accept
            </button>
            <button className="button-common rej-button" onClick={()=>{rejectingFine(fineId)}}>Reject</button>
          </div>
        ) : (
          <div className="ac-tr-container">
            <button
              className="button-common rej-button"
              onClick={() => {
                makingPayment(fineId, driverId, fineListId);
              }}
            >
              Make Payment
            </button>
          </div>
        )}

        <ToastContainer />
      </div>
    </>
  )
};

export default AlertCard;
