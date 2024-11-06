// purpose-login and sign up
import axios from "axios";

const driverLogin = async (username, password) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API_URL}/driver/login`,
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
    return response.data;
  } catch (err) {
    console.error("Driver login api call error: ", err);
  }
};
