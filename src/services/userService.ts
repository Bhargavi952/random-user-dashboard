import axios from "axios";
import type { User } from "../types/user";

const API_URL = "https://randomuser.me/api/";

export const fetchRandomUser = async (): Promise<User> => {
  const response = await axios.get(API_URL);

  const {
    name: { first, last },
    email,
    picture: { large },
  } = response.data.results[0];

  const user: User = {
    fullName: `${first} ${last}`,
    email,
    image: large,
  };

  // save to localStorage
  localStorage.setItem("randomUser", JSON.stringify(user));

  return user;
};
