import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="panel flex flex-col gap-y-6">
        <InputField type="email" placeholder="Enter email" />
        <InputField type="password" placeholder="Enter password" />
        <InputField placeholder="Enter text" />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {"No account? "}
            <a className="underline" href="/auth/signup">
              Sign up
            </a>
          </p>

          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
