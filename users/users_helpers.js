const getAllUsers = () => {
    return users;
  };
  
  const getSingleUser = (index) => {
    return users[index];
  };


  module.exports = { add, getAllUsers, getSingleUser, users };
