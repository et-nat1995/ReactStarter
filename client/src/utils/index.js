import Axios from "axios";

export default {
  consoleButton: () => {
    return Axios.get("/api/success");
  },
  submitConversion: ({from, to, amount}) => {
    return Axios.post(`/api/submit`, {from,to, amount});
  },
  getHistory: () => {
    return Axios.get('/api/history');
  },
  deletRow: ({ id })=>{
    return Axios.delete(`/api/delete/${id}`);
  },
  updateRow: (body) => {
    return Axios.put('/api/update', body);
  }
}
