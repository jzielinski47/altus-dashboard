import { Button } from "@headlessui/react";
import InputField from "../components/InputField";
import { useState } from "react";

const Login = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setUsername(e.target.value);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEMail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value);

  const sendCredentials = () => {
    console.log(username, email, password);

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
      credentials: "include",
    };

    if (email.length > 0 && password.length > 0) {
      if (isRegistration) {
        fetch("http://localhost:4000/api/auth/signup", options)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                console.error("Login error:", data.msg);
                throw new Error(data.msg);
              });
            }
          })
          .then((data) => {
            console.log("Login successful: ", data);
          })
          .catch((err) => console.error("123 an error: " + err));
      } else {
        fetch("http://localhost:4000/api/auth", options)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                console.error("Login error:", data.msg);
                setErrMessage(data.msg);
                throw new Error(data.msg);
              });
            }
          })
          .then((data) => {
            console.log("Login successful: ", data);
            setErrMessage(data.msg);
          })
          .catch((err) => console.error("123 an error: " + err));
      }
    } else {
      setErrMessage("Please fill all the fields in order to proceed.");
    }
  };

  const toggleRegistration = () => {
    setIsRegistration(!isRegistration);
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

        {isRegistration ? (
          <InputField
            placeholder="Enter username"
            onChange={handleUsernameChange}
          />
        ) : null}

        <InputField
          type="email"
          placeholder="Enter email"
          onChange={handleEmailChange}
        />
        <InputField
          type="password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
        />

        <span className="text-error text-base">{errMessage}</span>

        <div className="flex items-center justify-between">
          <p className="text-sm text-text-white-60">
            {"No account? "}
            <a
              className="underline cursor-pointer"
              onClick={toggleRegistration}
            >
              Sign up
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
