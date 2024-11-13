import { Button } from "@headlessui/react";
import InputField from "../components/InputField";
import { useState } from "react";

const Login = () => {
  const [email, setEMail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEMail(e.target.value);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setPassword(e.target.value);

  const sendCredentials = () => {
    console.log(email, password);

    fetch("http://localhost:4000/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("aaa");
        console.log(data);
      });
  };

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-6 min-w-[400px]">
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
