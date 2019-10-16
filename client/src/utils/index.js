import Axios from "axios";

export default {
  consoleButton: () => {
    return Axios.get("/api/success");
  },
  submitConversion: ({from, to, amount}) => {
    return Axios.post(`/currency-conversion-history-service/from/${from}/to/${to}/quantity/${amount}`);
  },
  getHistory: () => {
    return Axios.get('/currency-conversion-history-service/lists');
  },
  deletRow: ({ id })=>{
    return Axios.delete(`/currency-conversion-history-service/lists/${id}`);
  },
  updateRow: (body) => {
    return Axios.put('/currency-conversion-history-service/lists', body);
  }
}
