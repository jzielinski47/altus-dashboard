import { useEffect, useState } from "react";
import HButton from "../../../components/Buttons/HButton";
import { PlusIcon } from "@heroicons/react/16/solid";
import { iAccount } from "../../../interfaces";
import AssetRow from "./AssetRow";

const AssetTracker = () => {
  const [accountsList, setAccountsList] = useState<iAccount[]>([]);
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    setAccountsList([
      { id: 0, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "US Bank", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Łącki Bank Spółdzielczy", balance: 24.2, currency: "PLN" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Pekao Bank polski", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
    ]);

    const date = new Date(Date.now());
    setTodaysDate(date.toString());
  }, []);

  return (
    <div className="flex flex-grow items-center justify-start flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white/[87%] font-bold">Net worth tracker</h1>
        <p className="text-base text-white/60 font-medium">As of today, date {todaysDate}</p>
      </div>
      <div className="flex-grow w-full h-full h-32 overflow-y-auto border border-white/[38%] p-2 rounded-lg">
        <table className="min-w-full divide-y-2 divide-border-black text-sm rounded-lg bg-level-">
          <thead className="text-left">
            <th></th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Asset</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium">Value</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
            <th className="whitespace-nowrap px-4 py-2 font-medium"></th>
          </thead>
          <tbody className="divide-y divide-border-black">
            {accountsList.map((acc: iAccount) => (
              <AssetRow key={acc.id} acc={acc} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-2">
        <HButton variant="success">
          <PlusIcon className="size-4" /> Add asset
        </HButton>
        <HButton variant="error">Remove all</HButton>
      </div>
    </div>
  );
};

export default AssetTracker;
