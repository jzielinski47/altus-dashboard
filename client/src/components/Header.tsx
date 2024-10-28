const Header = () => {
  const appName: string = `Altus`;

  return (
    <div className="w-full flex flex-row place-content-between items-center">
      <a href="/">
        <h2 className="font-semibold text-xl">{appName}</h2>
      </a>
      <a
        href="/auth"
        className="text-sm font-semibold leading-6 text-neutral-400"
      >
        Log in <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
};

export default Header;
