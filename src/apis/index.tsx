import axios from "axios";

const fbAuthAxios = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/`,
  /*headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_SERVER_URL}`,
  },
  withCredentials: false,*/
});
const fbPrivateAxios = axios.create({
  baseURL: `https://us-central1-mbe-health.cloudfunctions.net/`,
});

const serverAxios = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/`,
  /*headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_SERVER_URL}`,
  },
  withCredentials: false,*/
});

const privateAxios = axios.create({
  baseURL: `https://identitytoolkit.googleapis.com/`,
  /*headers: {
    "Access-Control-Allow-Origin": `${process.env.REACT_APP_SERVER_URL}`,
  },
  withCredentials: true,*/
});

export { fbAuthAxios, fbPrivateAxios, serverAxios, privateAxios };
