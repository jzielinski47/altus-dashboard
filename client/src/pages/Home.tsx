import NavButton from "../components/NavButton";

export default function Home() {
  return (
    <div
      className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-16"
      style={{ maxWidth: "1680px" }}
    >
      <div className="flex-1 flex-col justify-left">
        <h1 className="text-balanced lg:text-pretty text-center lg:text-left tracking-tight text-5xl font-bold sm:text-7xl">
          Connect, Track, and Grow—All in One Place.
        </h1>
        <p className="text-pretty text-left text-lg font-medium mt-4 text-neutral-400 max-w-prose sm:text-xl/8">
          Altus is your all-access platform to connect with like-minded
          creators, stay on top of your tasks, and watch your progress in
          real-time. Start your journey to seamless productivity and meaningful
          connections with a community that’s ready to thrive together.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-left gap-x-6">
          <NavButton name="Get started" path={"/auth"} variant={1} />
          <NavButton name="Learn more" path={"/about"} variant={2} />
        </div>
      </div>
      <div className="flex-1 flex w-full h-full justify-center items-center">
        <img className="border-0 placeholder rounded-2xl  max-h-full w-[60vw] aspect-[1/1] lg:aspect-[4/5] lg:w-[80%] sm:aspect-[1/1] sm:w-[60%]" />
      </div>
    </div>
  );
}
