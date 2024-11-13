import { motion } from "framer-motion";
import Badge from "../../components/Badge";
import NavButton from "../../components/NavButton";
import { gradientText } from "../../tailwind-prefabs";

export default function Hero() {
  return (
    <section className="w-full h-fit bg-level-0 flex justify-center py-8">
      <div className="max-w-screen-xl flex flex-col-reverse xl:flex-row items-center justify-center gap-16 px-8 py-8">
        <div className="flex-1 flex flex-col gap-1 justify-center items-center xl:items-start">
          <div className="mb-6 flex flex-col lg:flex-row items-center justify-left gap-x-6">
            <Badge name="What's new" color="primary" />
            <NavButton name="Just shipped v1.0" path={"/features"} type={2} />
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
            Altus is your all-access platform to connect with like-minded
            creators, stay on top of your tasks, and watch your progress in
            real-time. Start your journey to seamless productivity and
            meaningful connections with a community that’s ready to thrive
            together.
          </motion.p>
          <div className="mt-6 flex flex-col lg:flex-row items-center justify-left gap-x-6">
            <NavButton name="Get started" path={"/auth"} type={1} />
            <NavButton name="Learn more" path={"/about"} type={2} />
          </div>
        </div>
        <div className="hidden xl:flex-1 w-full h-full justify-center items-center xl:flex">
          <img className="border-0 placeholder rounded-xl w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-none xl:h-auto aspect-[1/1]" />
        </div>
      </div>
    </section>
  );
}
