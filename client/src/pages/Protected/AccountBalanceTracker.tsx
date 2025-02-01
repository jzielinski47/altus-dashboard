import { useEffect, useState } from "react";
import HButton from "../../components/Buttons/HButton";
import { PlusIcon } from "@heroicons/react/16/solid";

interface iAccount {
  id: number;
  name: string;
  balance: number;
  currency: "EUR" | "PLN" | "USD" | string;
}

const AccountBalanceTracker = () => {
  const [accountsList, setAccountsList] = useState<iAccount[]>([]);
  const [todaysDate, setTodaysDate] = useState("");

  useEffect(() => {
    setAccountsList([
      { id: 0, name: "Revolut", balance: 241451.2, currency: "USD" },
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
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Pekao Bank polski", balance: 241451.2, currency: "USD" },
      { id: 1, name: "Revolut", balance: 241451.2, currency: "USD" },
    ]);

    const date = new Date(Date.now());
    setTodaysDate(date.toString());
  }, []);

  return (
    <div className="flex flex-grow items-center justify-start flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white/[87%] font-bold">Account balance tracker</h1>
        <p className="text-base text-white/60 font-medium">As of today, date {todaysDate}</p>
      </div>
      <div className="h-64 overflow-y-auto border border-white/[38%] p-2 rounded-lg flex flex-col box-border">
        {accountsList.map((acc: iAccount) => (
          <div key={acc.id} className="inline-flex gap-4 items-center justify-start pb-4 border-b border-white/[38%]">
            <h2 className="text-white/[87%] font-bold text-lg">{acc.name}:</h2>
            <p className="text-white/60">
              {acc.balance} {acc.currency}
            </p>
            <HButton variant="secondary">Edit</HButton>
            <HButton variant="error">Delete</HButton>
          </div>
        ))}
      </div>

      <HButton variant="success">
        <PlusIcon className="size-4" /> Add account
      </HButton>
    </div>
  );
};

export default AccountBalanceTracker;
