// import necessary libraries
import axios from axios;
// get backend api
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;

// for offence tab in the alerts - retrive all witnessed fines - 2nd endpoint in document
const getOffenceData = async(userId) =>{
    try{
        const response = await axios.get(`${backendUrl}/driver/getWitnessedOffences`,     
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
    }catch(err){
        console.error("Error calling backend API: ", err )
    }
}

//for fine tab in alets - retrive all accepted offences - 3rd endpoint in document
const getFinesData = async(userId) =>{
    try{
        const response = await axios.get(`${backendUrl}/driver/getAcceptedOffences`,     
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
    }catch(err){
        console.error("Error calling backend API: ", err )
    }
}

// for individual fines - retrive necessary data of fines - 4th endpoint in document
const getFine = async(fineId) =>{
    try{
        const response = await axios.get(`${backendUrl}/fine/get/fine`,     
          {
            params:{
              fineId
            }
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        return response;
    }catch(err){
        console.error("Error calling backend API: ", err)
    }
}

// for make payment - will change fine status to paid and decrese offence level - 5th endpoint in document
const makePayment = async(username, password) =>{
    try{
        const response = await axios.get(`${backendUrl}/driver/makePayment`,     
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
    }catch(err){
        console.error("Error calling backend API: ", err)
    }
}