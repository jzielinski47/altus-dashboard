import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { Button } from "@headlessui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HUIButton from "../../../components/Buttons/Button";
import ArrowButton from "../../../components/Buttons/ArrowButton";
import Badge from "../../../components/Badge";
import { gradientText } from "../../../tailwind-prefabs";

export default function Hero() {
  const nav = useNavigate();

  return (
    <section className="w-full h-fit bg-level-0 flex justify-center py-8">
      <div className="max-w-screen-xl flex flex-col-reverse xl:flex-row items-center justify-center gap-16 px-8 py-8">
        <div className="flex-1 flex flex-col gap-1 justify-center items-center xl:items-start">
          <div className="mb-6 flex flex-col lg:flex-row items-center justify-left gap-x-6">
            <Badge name="What's new" color="primary-a0" />
            <ArrowButton content="Just shipped v1.0" onClick={() => nav("/versions")} />
          </div>
          <h1 className="text-4xl max-w-[1000px] md:text-6xl font-bold text-balance xl:text-pretty text-center xl:text-left tracking-tight ">
            Connect, Track, and Grow—All in One Place.
          </h1>
          <motion.p
            className={
              gradientText +
              " text-justify text-base sm:text-pretty text-left font-medium mt-4 text-neutral-400 max-w-prose sm:text-xl/8"
            }
          >
            Altus is your all-access platform to connect with like-minded creators, stay on top of your tasks, and watch
            your progress in real-time. Start your journey to seamless productivity and meaningful connections with a
            community that’s ready to thrive together.
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-left gap-x-6 gap-y-2">
            {/* <NavButton name="Get started" path={"/auth"} variant={1} />
            <NavButton name="Learn more" path={"/about"} variant={2} /> */}

            <HUIButton content="Get started" onClick={() => nav("/auth")} />
            <HUIButton content="Learn more" onClick={() => nav("/about")} />
            <Button
              onClick={() => (window.location.href = "https://github.com/jzielinski47/altus-dashboard")}
              className="inline-flex items-center gap-2 rounded-lg py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-level-4 data-[focus]:outline-1 data-[focus]:outline-white  transition duration-700 ease-in-out"
            >
              <FontAwesomeIcon icon={faGithub} className="size-6 text-white" />
              {"Documentation"}
            </Button>
          </div>
        </div>
        <div className="hidden xl:flex-1 w-full h-full justify-center items-center xl:flex">
          <img
            src="https://images.unsplash.com/photo-1560837616-fee1f3d8753a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover border-0 placeholder rounded-xl w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-none xl:h-auto aspect-[1/1]"
          />
        </div>
      </div>
    </section>
  );
}
