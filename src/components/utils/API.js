import axios from "axios";

const BASEURL = "https://superheroapi.com/api/";
const APIKEY = "2736829286383037";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "/search/" + query);
  }
};