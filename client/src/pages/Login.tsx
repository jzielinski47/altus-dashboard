import { Button } from "@headlessui/react";
import InputField from "../components/InputField";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

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

    fetch("http://localhost:4000/api/auth", options)
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
  };

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-6 min-w-[400px]">
        <InputField
          placeholder="Enter username"
          onChange={handleUsernameChange}
        />

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

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            {"No account? "}
            <a className="underline" href="/auth/signup">
              Sign in
            </a>
          </p>
          <Button
            onClick={sendCredentials}
            className="inline-block rounded-lg bg-primary py-2 px-4 text-sm text-white font-medium data-[hover]:bg-secondary data-[active]:bg-secondary"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
