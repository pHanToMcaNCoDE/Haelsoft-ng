// utils/fetchData.js
import axios from "axios";

axios.defaults.baseURL = "https://edtech-backend-q2ud.onrender.com";

export const fetchData = async (url) => {
  // throw new Error('fetch Data error');
  try {
    const response = await axios.get(url);
    // console.log("response", response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("real error", error.message);
    return {
      error,
      status: "error",
    };
  }
};
