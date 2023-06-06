import axios from "axios";

export const getInfoUser = (name: string) => {
  return axios.get(`https://api.github.com/users/${name}`);
};
