// purpose-login and sign up
import axios from "axios";

// backend url - change according to environmental variable change
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;
// driver login function
const driverLogin = async (username, password) => {
  try {
    const response = await axios.post(
      `${backendUrl}/driver/login`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.error("Driver login api call error: ", err);
  }
};

// driver registration function
const driverRegister = async (username, password, firstName, lastName, age, licenceNumber, nic, houseNumber, streetName, city) => {
  try {
    const response = await axios.post(
      `${backendUrl}/driver/login`,
      {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        age: age,
        licenceNumber: licenceNumber,
        nic: nic,
        houseNumber: houseNumber,
        streetName: streetName,
        city: city,
        allowedVehicleId: "avi_1",
        nearestPoliceStationId: "pol_1",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    console.error("Driver login api call error: ", err);
  }
};

export { driverLogin };
