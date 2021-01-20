import axios from "axios";

const registerUsers = (value, callBack) => {
  const URL = "http://localhost:8000/users";
  const data = {
    firstname: value.firstname,
    lastname: value.lastname,
    email: value.email,
    password: value.password,
  };

  axios
    .post(URL, data)
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginUsers = (value, callBack) => {
  const URL = "http://localhost:8000/users/auth";
  const data = {
    email: value.email,
    password: value.password,
  };

  axios
    .post(URL, data, { withCredentials: true, credentials: "include" })
    .then((response) => {
      callBack(response);
    })
    .catch((error) => {
      console.log(error);
    });
  // axios.defaults.withCredentials = true;
};

export { registerUsers, loginUsers };
