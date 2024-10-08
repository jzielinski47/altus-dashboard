export const signupValidationSchema = {
  username: {
    errorMessage: "Invalid username",
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
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: "Password should be at least 8 chars",
    },
  },
};
