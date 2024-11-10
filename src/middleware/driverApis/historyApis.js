// import necessary libraries
import axios from "axios";
// get backend api
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;

// for history page - will retrive all historical data of driver - 7th endpoint in document
const getHistory = async (driverId, fineStatus) => {
  try {
    const response = await axios.get(
      `${backendUrl}/fine/get/fineStatus`,
      {
        params: {
          driverId,fineStatus
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error calling backend API: ", err);
  }
};

// for individual fines - retrive necessary data of fines - 4th endpoint in document
const getFine = async (fineId) => {
  try {
    const response = await axios.get(
      `${backendUrl}/fine/get/fine`,
      {
        params: {
          fineId,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (err) {
    console.error("Error calling backend API: ", err);
  }
};

export { getFine, getHistory };
