export default function Home() {
  return (
    <div
      className="w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-16"
      style={{ maxWidth: "1680px" }}
    >
      <div className="flex-1 flex-col justify-left">
        <h1 className="text-pretty text-left tracking-tight text-5xl font-bold sm:text-7xl">
          Connect, Track, and Grow—All in One Place.
        </h1>
        <p className="text-pretty text-left text-lg font-medium mt-4 text-neutral-400 max-w-prose sm:text-xl/8">
          Altus is your all-access platform to connect with like-minded
          creators, stay on top of your tasks, and watch your progress in
          real-time. Start your journey to seamless productivity and meaningful
          connections with a community that’s ready to thrive together.
        </p>
        <div className="mt-10 flex items-center justify-left gap-x-6">
          <a
            href="/auth"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </a>
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-neutral-500"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <img
        className="flex-1 placeholder rounded-2xl"
        style={{ width: "50vw", aspectRatio: "4 / 3" }}
      />
    </div>
  );
}
