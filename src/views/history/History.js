import "./History.css";
import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { getHistory } from "../../middleware/driverApis/historyApis";

// Browse History List
const options = [
  { value: "", label: "Select offense type..." },
  { value: "Fine pay", label: "Fine pay" },
  { value: "Offense 1", label: "Offense 1" },
  { value: "Offenses 2", label: "Offenses 2" },
  { value: "Offenses 3", label: "Offenses 3" },
];

const History = () => {
  // Select Offenses
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  //   data saved array
  const [histroyData, setHistoryData] = useState([]);

  // Date Time Picker
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };
  const driverId = localStorage.getItem("driverId");
  const status = "paid";

  //   get data
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await getHistory(driverId, status);
        if (response !== null && response !== undefined) {
          setHistoryData(response);
        } else {
          console.error("History data empty or null");
        }
      } catch (err) {
        console.error("Data fetching error: ", err);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="container">
      <HeaderBox headertext={"Offense History"} />

      <div className="page-content-history">
        <div className="indicator">
          <h2>Offense Summary</h2>
          <div className="offense-summary">
            {/* Display offense summary list here */}
          </div>
        </div>

        <div className="history-list-view">
          <h2>Browse History</h2>
          <div className="history-list-components">
            <div className="history-list-components-date-range">
              <div className="history-list-components-date-range-from">
                <label>From:</label>
                <DateTimePicker
                  value={fromDate}
                  onChange={handleFromDateChange}
                />
              </div>
              <div className="history-list-components-date-range-to">
                <label>To:</label>
                <DateTimePicker value={toDate} onChange={handleToDateChange} />
              </div>
            </div>

            <div className="history-list-components-select-items">
              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button>Browse</button>
            </div>
          </div>

          <div className="history-list-display">
            <div className="history-list-display-box">
              {/* Display history list here */}
   
                {histroyData.map((historyDatum) => (
                  <div>
                    <h3>{historyDatum.fineName}</h3>
                    <h4>{historyDatum.fineDescription}</h4>
                    <h5>{historyDatum.fineAmount}</h5>
                    <p>{historyDatum.fineDate}</p>
                  </div>
                ))}
 
            </div>
          </div>
        </div>
      </div>
      <TabNavigation bghistory={"rgb(10, 55, 202)"} />
    </div>
  );
};

export default History;
