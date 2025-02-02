import { Field } from "@headlessui/react";
import { CreditCardIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import HButton from "../../../components/Buttons/HButton";
import HInput from "../../../components/HInput";
import HListBox from "../../../components/HListBox";
import { iAccount } from "../../../interfaces";
import { currencies } from "../../../utils/currencyData";
import AssetRow from "./AssetRow";

const currencyList = Object.keys(currencies).map((code, index) => ({
  id: index,
  name: code,
}));

const AssetTracker = () => {
  const [accountsList, setAccountsList] = useState<iAccount[]>([]);
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    setAccountsList([{ id: 0, name: "Cash", balance: 0.2, currency: "PLN" }]);

    const date = new Date(Date.now());
    setTodaysDate(date.toString());
  }, []);

  // const addNewAsset = () => {};

  return (
    <div className="flex flex-grow items-center justify-start flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white/[87%] font-bold">Net worth tracker</h1>
        <p className="text-base text-white/60 font-medium">As of today, date {todaysDate}</p>
      </div>
      <div className="flex-grow w-full h-32 overflow-y-auto border border-white/[38%] p-2 rounded-lg">
        <table className="min-w-full divide-y-2 divide-border-black text-sm rounded-lg bg-level-">
          <thead className="text-left">
            <tr>
              <th></th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Asset</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium">Value</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
              <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-black">
            {accountsList.map((acc: iAccount) => (
              <AssetRow key={acc.id} acc={acc} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-6 items-end">
        <Field className="p-1">
          <CreditCardIcon className="size-8 text-white/60 hover:text-white/70 cursor-pointer mt-1" />
        </Field>

        <HInput name="Asset name" placeholder="Bank | Cash" />
        <HInput name="Value" placeholder="20.4" />
        <HListBox name="Currency" list={currencyList} />
      </div>
      <div className="flex gap-4">
        <HButton variant="success">
          <PlusIcon className="size-4" /> Add asset
        </HButton>
        <HButton variant="error">Remove all</HButton>
      </div>
    </div>
  );
};

export default AssetTracker;
