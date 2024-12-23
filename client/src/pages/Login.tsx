import { Button } from "@headlessui/react";
import InputField from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iError } from "../interfaces";
import { login, signup } from "../api/auth";
import { serverIP, serverPort } from "../api/setup";

const Login = () => {
  const nav = useNavigate();

  const [isRegistration, setIsRegistration] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => setEMail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(e.target.value);

  const toggleRegistration = () => setIsRegistration(!isRegistration);

  const sendCredentials = async () => {
    await setErrMessage("");

    if (!email || !password || isRegistration ? !username : false) {
      await setErrMessage("Please, fill all the fields.");
      return;
    }

    try {
      const res = isRegistration ? await signup({ username, email, password }) : await login({ email, password });
      console.log(res.msg);
    } catch (err: iError | any) {
      setErrMessage(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-6 min-w-[400px]">
        <div className="flex flex-col gap-y-[0.5rem]">
          <h2 className="text-xl text-center font-extrabold text-text-white-87 md:text-3xl">
            {isRegistration ? "Sign up" : "Sign in"}
          </h2>
          <p className="text-sm text-text-white-60 text-center font-medium text-gray-500 md:text-base">
            Fill all the fields in order to perform your desired action.
          </p>
        </div>

        {isRegistration ? <InputField placeholder="Enter username" onChange={handleUsernameChange} /> : null}

        <InputField type="email" placeholder="Enter email" onChange={handleEmailChange} />
        <InputField type="password" placeholder="Enter password" onChange={handlePasswordChange} />

        <span className="text-error text-base">{errMessage}</span>

        <div className="flex items-center justify-between">
          <p className="text-sm text-text-white-60">
            {"No account? "}
            <a className="underline cursor-pointer" onClick={toggleRegistration}>
              {isRegistration ? "Sign in" : "Sign up"}
            </a>
          </p>
          <Button
            onClick={sendCredentials}
            className="inline-block rounded-lg bg-primary py-2 px-4 text-sm text-white font-medium data-[hover]:bg-secondary data-[active]:bg-secondary"
          >
            {isRegistration ? "Sign up" : "Sign in"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
