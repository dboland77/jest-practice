const { default: axios } = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Dave",
    };
    user["lastName"] = "Boland";
    return user;
  },
  fetchUser: (i) => axios.get(`https://jsonplaceholder.typicode.com/users/${i}`)
  .then(response=>response.data)
  .catch(error=>'error')
};

module.exports = functions;
