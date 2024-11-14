import "./New.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { useEffect, useState } from "react";
import Card from "../../components/objects/Card/Card";
import DetailBox from "../../components/objects/DetailBox/DetailBox";
import { getFinesMatchStatus } from "../../middleware/driverApis/alertApis";
import AlertCard from "../../components/objects/AlertCard/AlertCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handleAcceptButtonOffence = (fineId) => {
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
        console.log(response)
        if (
          response !== null &&
          response !== undefined &&
          response.status === 200
        ) {
          setResponseData(response.data);
          console.log(response.data);
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
          console.log(response.data);
        } else {
          setResponseData([]);
        }
      }
    };

    getFineData();
  }, [switchTab]);

  // card click function
  return (
    <div className="container">
      <HeaderBox headertext={"Alerts"} />

      <div
        style={{
          background:
            switchTab === "Fine"
              ? "linear-gradient(to right, rgb(107, 29, 231), transparent)"
              : "linear-gradient(to left, rgb(107, 29, 231), transparent)",
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
                  <AlertCard
                    fineName={fine.fineName}
                    fineDate={fine.fineDate}
                    fineAmount={fine.fineAmount}
                    fineDescription={fine.fineDescription}
                    fineId={fine.fineId}
                    location="offense"
                    fineListId={fine.fineListId}
                    officerFirstName={fine.officerFirstName}
                    officerLastName={fine.officerLastName}
                    officerPoliceId={fine.officerId}
                    witnessedOfficerFirstName={fine.witnessedOfficerFirstName}
                    witnessedOfficerLastNamee={fine.withnessedOfficerLastName}
                    witnessedOfficerPoliceId={fine.witnessedOfficerId}
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
                  <AlertCard
                    fineName={fine.fineName}
                    fineDate={fine.fineDate}
                    fineAmount={fine.fineAmount}
                    fineDescription={fine.fineDescription}
                    fineId={fine.fineId}
                    location="fine"
                    fineListId={fine.fineListId}
                    officerFirstName={fine.officerFirstName}
                    officerLastName={fine.officerLastName}
                    officerPoliceId={fine.officerId}
                    witnessedOfficerFirstName={fine.witnessedOfficerFirstName}
                    witnessedOfficerLastName={fine.witnessedOfficerLastName}
                    witnessedOfficerPoliceId={fine.witnessedOfficerId}
                  />
                </div>
              ))}
              {/* Offense data display here. */}
            </div>
          )}
        </div>
      </div>

      <TabNavigation bgnew={"rgb(10, 55, 202)"} />
      <ToastContainer />
    </div>
  );
};

export default New;
