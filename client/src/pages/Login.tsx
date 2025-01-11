import InputField from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iError } from "../interfaces";
import { login, signup } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import HUIButton from "../components/Buttons/HUIButton";

const Login = () => {
  const nav = useNavigate();

  const [isRegistration, setIsRegistration] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { setUser } = useAuth();

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

      if (isRegistration) {
        setErrMessage(res.msg);
        setIsRegistration(false);
      } else {
        if (res.user) setUser(res.user);
        nav("/dashboard", { replace: true });
      }
    } catch (err: iError | any) {
      setErrMessage(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col gap-y-6 min-w-[400px]">
        <div className="flex flex-col gap-y-[0.5rem]">
          <h2 className="text-xl text-center font-extrabold text-white/[87%] md:text-3xl">
            {isRegistration ? "Sign up" : "Sign in"}
          </h2>
          <p className="text-sm text-white/60 text-center text-gray-500 md:text-base">
            Fill all the fields in order to perform your desired action.
          </p>
        </div>

        {isRegistration ? <InputField placeholder="Enter username" onChange={handleUsernameChange} /> : null}

        <InputField type="email" placeholder="Enter email" onChange={handleEmailChange} />
        <InputField type="password" placeholder="Enter password" onChange={handlePasswordChange} />

        <span className="text-error text-base">{errMessage}</span>

        <div className="flex items-center justify-between">
          <p className="text-sm text-white/60">
            {"No account? "}
            <a className="underline cursor-pointer" onClick={toggleRegistration}>
              {isRegistration ? "Sign in" : "Sign up"}
            </a>
          </p>
          <HUIButton onClick={sendCredentials}>{isRegistration ? "Sign up" : "Sign in"} </HUIButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
