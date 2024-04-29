import axios from "axios";
import { api } from "../api";

export const getProjects = async () => {
  try {
    const res = await axios.get(api + "/project/all");
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
