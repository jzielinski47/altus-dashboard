import NavButton from "../components/NavButton";
import { gradientText } from "../tailwind-prefabs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section className="w-full h-full sm:h-[60%] bg-level-0 flex justify-center">
        <div className="max-w-screen-xl flex flex-col-reverse xl:flex-row items-center justify-center gap-8 px-8 py-4">
          <div className="flex-1 flex flex-col gap-1 justify-center items-center xl:items-start">
            <div className="mb-6 flex flex-col lg:flex-row items-center justify-left gap-x-6">
              <NavButton name="What's new" path={"/features"} variant={1} />
              <NavButton
                name="Just shipped v1.0"
                path={"/features"}
                variant={2}
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balanced xl:text-pretty text-center xl:text-left tracking-tight ">
              Connect, Track, and Grow—All in One Place.
            </h1>
            <motion.p
              className={
                gradientText +
                " text-justify text-base sm:text-pretty text-left font-medium mt-4 text-neutral-400 max-w-prose sm:text-xl/8"
              }
            >
              Altus is your all-access platform to connect with like-minded
              creators, stay on top of your tasks, and watch your progress in
              real-time. Start your journey to seamless productivity and
              meaningful connections with a community that’s ready to thrive
              together.
            </motion.p>
            <div className="mt-6 flex flex-col lg:flex-row items-center justify-left gap-x-6">
              <NavButton name="Get started" path={"/auth"} variant={1} />
              <NavButton name="Learn more" path={"/about"} variant={2} />
            </div>
          </div>
          <div className="hidden xl:flex-1 w-full h-full justify-center items-center xl:flex">
            <img className="border-0 placeholder rounded-xl w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-none xl:h-auto aspect-[1/1]" />
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
}
