import axios from 'axios';


// TODO: will need to add the url that vidya will give me here
export default axios.create({
  baseURL: 'http://localhost:8765'
});
