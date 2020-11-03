import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecommerce-968cc.cloudfunctions.net/api",
});

export default instance;
