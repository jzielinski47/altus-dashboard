import { Button } from "@headlessui/react";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex flex-col gap-y-6 min-w-[400px]">
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

          <Button className="inline-block rounded-lg bg-primary py-2 px-4 text-sm text-white font-medium data-[hover]:bg-secondary data-[active]:bg-secondary">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
