const Error = () => {
  return (
    <>
      <div className="grid h-screen place-content-center bg-neutral-900 px-4">
        <h1 className="uppercase tracking-widest text-grey-500">
          404 | Not Found
        </h1>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring flex justify-center"
        >
          Go Back Home
        </a>
      </div>
    </>
  );
};

export default Error;
