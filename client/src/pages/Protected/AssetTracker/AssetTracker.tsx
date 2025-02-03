import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useEffect, useState } from "react";
import TabComponent from "../../../components/common/TabComponent";
import { iAsset } from "../../../interfaces";
import AssetForm from "./AssetForm";
import AssetTable from "./AssetTable/AssetTable";

const AssetTracker = () => {
  const [assetList, setAssetList] = useState<iAsset[]>([]);
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    const date = new Date(Date.now());
    setTodaysDate(date.toString());
  }, []);

  const appendAsset = (asset: Partial<iAsset>) => {
    setAssetList((prev) => [...prev, { ...asset, id: prev.length + 1 } as iAsset]);
  };

  const deleteOne = (id: number) => {
    setAssetList(assetList.filter((asset) => asset.id !== id));
  };

  const deleteAll = () => setAssetList([]);

  return (
    <div className="flex flex-grow items-center justify-start flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white/[87%] font-bold">Net worth tracker</h1>
        <p className="text-base text-white/60 font-medium">As of today, {todaysDate}</p>
      </div>
      <TabGroup>
        <TabList className="flex gap-4 justify-center">
          <TabComponent>Assets</TabComponent>
          <TabComponent>Liabilites</TabComponent>
        </TabList>
        <TabPanels className="mt-4">
          <TabPanel className="flex-grow block h-full w-full flex flex-col gap-4">
            <AssetTable assetList={assetList} deleteById={deleteOne} />
            <AssetForm appendAsset={appendAsset} deleteAll={deleteAll} />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default AssetTracker;
