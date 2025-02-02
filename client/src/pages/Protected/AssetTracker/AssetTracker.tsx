import { Field, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CreditCardIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import HButton from "../../../components/Buttons/HButton";
import HInput from "../../../components/HInput";
import HListBox from "../../../components/HListBox";
import { iAsset } from "../../../interfaces";
import AssetTable from "./AssetTable/AssetTable";
import { currencyList } from "../../../utils/currencyData";
import AssetForm from "./AssetForm";

const AssetTracker = () => {
  const [assetList, setAssetList] = useState<iAsset[]>([]);
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    setAssetList([
      { id: 0, name: "Cash", balance: 0.2, currency: "PLN" },
      { id: 0, name: "Cash", balance: 0.2, currency: "PLN" },
      { id: 0, name: "Cash", balance: 0.2, currency: "PLN" },
    ]);

    const date = new Date(Date.now());
    setTodaysDate(date.toString());
  }, []);

  const addNewAsset = (asset: Partial<iAsset>) => {
    setAssetList((prev) => [
      ...prev,
      {
        ...asset,
        id: prev.length + 1,
      } as iAsset,
    ]);
  };

  const removeAllAssets = () => setAssetList([]);

  return (
    <div className="flex flex-grow items-center justify-start flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white/[87%] font-bold">Net worth tracker</h1>
        <p className="text-base text-white/60 font-medium">As of today, {todaysDate}</p>
      </div>
      <TabGroup>
        <TabList className="flex gap-4 justify-center">
          <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            Assets
          </Tab>
          <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white">
            Libalitlies
          </Tab>
        </TabList>
        <TabPanels className="mt-4">
          <TabPanel className="flex-grow block h-full w-full flex flex-col gap-4">
            <AssetTable assetList={assetList} />
            <AssetForm addAsset={addNewAsset} removeAssets={removeAllAssets} />
          </TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default AssetTracker;
