import axios from "axios";
import { BASE_URL,BASE_URL_USERS } from "./Api.js";

export const getAllData = async (url) => {
  let res = await axios(url);
  let data = res.data;
  return data;
};

export const postData = async (url,obj) => {
  let res = await axios.post(url , obj);
  let data = res.data;
  return data;
};

export const patchById = async (url,id, obj) => {
  let res = await axios.patch(url + id, obj);
  let data = res.data;
  return data;
};

export const getDataById = async (url,id) => {
  let res = await axios(url + id);
  let data = res.data;
  return data;
};


export const deleteById = async (url,id) => {
  let res = await axios.delete(url + id);
  let data = res.data;
  return data;
};

