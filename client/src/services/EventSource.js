import axios from "axios"

export default {
  async getEvents() {
    let res = await axios.get("http://localhost:8000/contracts");
    return res.data;
  }
}
