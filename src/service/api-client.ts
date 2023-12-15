import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "07094a8815dc43ca8a8d2012a85a311b",
  },
});
