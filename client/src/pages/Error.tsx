import NavButton from "../components/NavButton";

const Error = () => {
  return (
    <>
      <div className="flex flex-col h-screen place-content-center px-4 justify-center items-center gap-4">
        <h1 className="uppercase tracking-widest text-text-white-60">
          404 | Not Found
        </h1>
        <NavButton name="Go back home" path={"/"} type={1} />
      </div>
    </>
  );
};

export default Error;
