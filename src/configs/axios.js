import axios from "axios";
const customInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
export default customInstance;
