export default function Home() {
  return (
    <div className="w-full h-full display flex flex-col items-center justify-center">
      <h1 className="text-balance text-center tracking-tight text-5xl font-bold vollkorn-sc-regular sm:text-7xl">
        Take control of your day
      </h1>
      <p className="text-balance text-center text-lg font-medium mt-4 text-neutral-400 max-w-prose sm:text-xl/8">
        Streamline your tasks, track your progress, and keep your mind clear.
        Start using avantgarde dashboard to achieve more with less stress. Your
        most productive self awaits.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
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
  );
}
