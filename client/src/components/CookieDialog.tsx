import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import HButton from "./Buttons/HButton";

const CookieDialog: React.FC<{ con: React.RefObject<HTMLDivElement> }> = ({ con }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { setIsCookiesSet } = useAuth();

  return (
    <Dialog open={isOpen} as="div" className="relative z-999 focus:outline-none" onClose={() => null}>
      <motion.div className="fixed inset-0 z-10 w-screen overflow-y-auto" drag dragConstraints={con} dragElastic={0.5}>
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded-xl bg-level-5/95 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle as="h3" className="text-base/7 font-medium text-white/[87%]">
              This web app uses cookies
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-white/50">
              This site uses cookies to improve your experience and store essential account information. By continuing,
              you agree to our{" "}
              <Link to="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline">
                Terms of Service
              </Link>
              .
            </p>
            <div className="mt-4">
              <HButton
                variant="secondary"
                onClick={() => {
                  setIsOpen(false);
                  setIsCookiesSet(true);
                }}
              >
                Accept
                <CheckCircleIcon className="size-4" />
              </HButton>
            </div>
          </DialogPanel>
        </div>
      </motion.div>
    </Dialog>
  );
};

export default CookieDialog;
