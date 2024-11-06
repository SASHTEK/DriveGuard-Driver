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

export{driverLogin}