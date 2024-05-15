import axios from "axios";
import { api } from "../api";

export const getPosts = async () => {
  try {
    const res = await axios.get(api + "/post/all");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
