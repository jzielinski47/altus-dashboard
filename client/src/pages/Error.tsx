import NavButton from "../components/NavButton";

const Error = () => {
  return (
    <>
      <div className="flex flex-col h-screen place-content-center px-4 justify-center items-center gap-4">
        <h1 className="uppercase tracking-widest text-grey-500">
          404 | Not Found
        </h1>
        <NavButton name="Go back home" path={"/"} variant={1} />
      </div>
    </>
  );
};

export default Error;
