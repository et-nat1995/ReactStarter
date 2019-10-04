import Axios from "axios";
import CustomAxios from './customAxios.js';

export default {
  consoleButton: () => {
    return Axios.get("/api/success");
  },
  getSubmit: ({from, to, amount}) => {
    CustomAxios.get(`/currency-conversion-history-service/from/${from}/to/${to}/quantity/${amount}`);
  }
}
