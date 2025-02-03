const AssetTableHeader = ({ variant }: { variant: "asset" | "liability" }) => {
  return (
    <thead className="text-left">
      <tr>
        <th></th>
        <th className="whitespace-nowrap px-4 py-2 font-medium">{variant == "asset" ? "Asset" : "Liability"}</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium">Value</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
        <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
      </tr>
    </thead>
  );
};

export default AssetTableHeader;
