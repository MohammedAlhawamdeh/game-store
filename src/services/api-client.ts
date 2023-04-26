import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f7d3cf6a34049b5b90b78960cb201e6",
  },
});
