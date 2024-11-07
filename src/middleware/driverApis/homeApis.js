import axios from "axios";
// backend url - change according to environmental variable change
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;

// get driver data
const getInitialData = async(userId) =>{
    try {
        const response = await axios.get(
          `${backendUrl}/driver/getDriver`,
          {
            params:{
              userId
            }
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
}

export {
  getInitialData
} 