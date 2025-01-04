export const signupDataValidationSchema = {
  username: {
    errorMessage: "Username should be at least 5 characters",
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
    },
    notEmpty: true,
    isString: true,
  },
  email: {
    isEmail: true,
    errorMessage: "Invalid email",
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Password should be at least 8 characters",
    },
  },
};
