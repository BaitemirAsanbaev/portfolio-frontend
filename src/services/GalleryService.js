import axios from "axios";
import { api } from "../api";

export const getPosts = async () => {
  try {
    const res = await axios.get(api + "/post/all");
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
