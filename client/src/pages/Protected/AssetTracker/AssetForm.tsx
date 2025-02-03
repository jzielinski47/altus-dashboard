import { Field } from "@headlessui/react";
import { CreditCardIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import HButton from "../../../components/common/Buttons/HButton";
import HInput from "../../../components/common/HInput";
import HListBox from "../../../components/common/HListBox";
import { iAsset } from "../../../interfaces";
import { currencyList } from "../../../constants/currencyData";

interface iAssetFormProps {
  appendAsset: (asset: Partial<iAsset>) => void;
  deleteAll: () => void;
}

const AssetForm = ({ appendAsset, deleteAll }: iAssetFormProps) => {
  const [assetName, setAssetName] = useState("");
  const [assetValue, setAssetValue] = useState(0);
  const [currency, setCurrency] = useState(currencyList[0]);

  const addNewAsset = () => {
    if (assetName.length > 0 && assetName.length < 32 && assetValue > 0 && currency.name.length > 0) {
      appendAsset({
        name: assetName,
        balance: assetValue,
        currency: currency.name,
      });
    }
  };

  return (
    <>
      <div className="flex gap-6 items-end">
        <Field className="p-1">
          <CreditCardIcon className="size-8 text-white/60 hover:text-white/70 cursor-pointer mt-1" />
        </Field>
        <HInput
          name="Asset name"
          placeholder="Bank | Cash"
          value={assetName}
          onChange={({ target: { value } }) => setAssetName(value)}
        />
        <HInput
          name="Value"
          placeholder="20.4"
          //   value={assetValue}
          onChange={({ target: { value } }) => {
            setAssetValue(value);
          }}
        />
        <HListBox name="Currency" list={currencyList} onChange={setCurrency} />
      </div>
      <div className="flex gap-4">
        <HButton variant="success" onClick={addNewAsset}>
          <PlusIcon className="size-4" /> Add asset
        </HButton>
        <HButton variant="error" onClick={deleteAll}>
          Remove all
        </HButton>
      </div>
    </>
  );
};

export default AssetForm;
