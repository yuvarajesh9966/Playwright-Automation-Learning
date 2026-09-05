export const validLogin = {
  username: "standard_user",
  password: "secret_sauce",
};

export const invalidLogin = {
  username: "standard_user",
  password: "wrong_password",
  expectedResult:
    "Epic sadface: Username and password do not match any user in this service",
};

export const lockedUser = {
  username: "locked_out_user",
  password: "secret_sauce",
  expectedResult: "Epic sadface: Sorry, this user has been locked out.",
};
