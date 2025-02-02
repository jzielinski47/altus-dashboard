import { iAsset } from "../../../../interfaces";
import AssetRow from "./AssetRow";
import AssetTableHeader from "./AssetTableHeader";

interface iAssetTable {
  assetList: iAsset[];
}


const AssetTable = ({ assetList }: iAssetTable) => {
  return (
    <div>
      <div className="flex-grow w-full h-full overflow-y-auto border border-white/[38%] p-2 rounded-lg max-h-[40rem]">
        <table className="min-w-full divide-y-2 divide-border-black text-sm rounded-lg bg-level-0">
          <AssetTableHeader />
          <tbody className="divide-y divide-border-black">
            {assetList.map((acc: iAsset) => (
              <AssetRow key={acc.id} acc={acc} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetTable;
