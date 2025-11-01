import axios from "axios";

export const getCountryByIP = async (ip) => {
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    return response.data.country_name || "Unknown";
  } catch (error) {
    console.error("IP lookup failed:", error.message);
    return "Unknown";
  }
};
