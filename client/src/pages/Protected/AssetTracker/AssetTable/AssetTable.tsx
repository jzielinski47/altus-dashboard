import { iAsset } from "../../../../interfaces";
import AssetRow from "./AssetRow";
import AssetTableHeader from "./AssetTableHeader";

interface iAssetTableProps {
  list: iAsset[];
  deleteById: (id: number) => void;
  variant?: "asset" | "liability";
}

const AssetTable = ({ list, deleteById, variant = "asset" }: iAssetTableProps) => {
  return (
    <div>
      <div className="flex-grow w-full h-full overflow-y-auto border border-white/[38%] p-2 rounded-lg max-h-[40rem]">
        <table className="min-w-full divide-y-2 divide-border-black text-sm rounded-lg bg-level-0">
          <AssetTableHeader variant={variant} />
          <tbody className="divide-y divide-border-black">
            {list.map((el: iAsset) => (
              <AssetRow key={el.id} acc={el} deleteById={deleteById} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTable;
