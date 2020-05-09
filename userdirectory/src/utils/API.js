import axios from "axios";

export default {
  makeUsers: function () {
    const BASEURL = "https://randomuser.me/api/?results=25&nat=us";
    return axios.get(BASEURL);
  },
};
