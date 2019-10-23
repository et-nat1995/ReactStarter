import Axios from "axios";

export default {
  consoleButton: () => {
    return Axios.get("/api/success");
  },
  submitConversion: ({from, to, amount}) => {
    return Axios.post(`/my-currency-conversion-history-service/from/${from}/to/${to}/quantity/${amount}`);
  },
  getHistory: () => {
    return Axios.get('/my-currency-conversion-history-service/lists');
  },
  deletRow: ({ id })=>{
    return Axios.delete(`/my-currency-conversion-history-service/lists/${id}`);
  },
  updateRow: (body) => {
    return Axios.put('/my-currency-conversion-history-service/lists', body);
  }
}
