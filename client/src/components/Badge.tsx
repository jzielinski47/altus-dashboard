export default function Badge({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <span
      className={`whitespace-nowrap rounded-full text-base border border-${color} px-2.5 py-0.5 text-sm text-${color} hover:bg-${color} hover:text-black cursor-pointer transition duration-700 ease-in-out`}
    >
      {name}
    </span>
  );
}
