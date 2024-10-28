export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Avantgarde App</h1>
      <p className="text-xl mb-6 text-center">
        Discover insights about your habits, productivity, and more.
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
