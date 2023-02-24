//user tests

const { getAllUsers, getSingleUser, users } = require("../../index");

//test getAllUsers function

test("test to get full list of users", () => {
  expect(getAllUsers()).toEqual(users);
});

//test to get a single user
test("test to get a single user", () => {
  expect(getSingleUser(0)).toEqual(users[0]);
});
