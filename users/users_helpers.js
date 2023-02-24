const users = require("./users_mock_object");

const getAllUsers = () => {
  return users;
};

const getSingleUser = (index) => {
  return users[index];
};

module.exports = { getAllUsers, getSingleUser };
