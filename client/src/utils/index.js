import Axios from "axios";

export default {
  consoleButton: () => {
    return Axios.get("/api/hello");
  }
}
