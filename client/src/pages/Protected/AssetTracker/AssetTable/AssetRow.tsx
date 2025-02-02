import { CreditCardIcon, PencilIcon } from "@heroicons/react/16/solid";
import HButton from "../../../../components/Buttons/HButton";
import { iAsset } from "../../../../interfaces";

const AssetRow = ({ acc }: { acc: iAsset }) => {
  const tdStyle: string = "text-white/[87%] text-left text-base p-1";

  return (
    <tr className="hover:bg-level-1 hover:cursor-pointer text-white/60 hover:text-white/[87%]">
      <td className={tdStyle}>
        <CreditCardIcon className="size-4" />
      </td>
      <td className={tdStyle}>
        <h2 className="text-white/[87%] font-bold">{acc.name}</h2>
      </td>
      <td className={tdStyle}>
        <p className="text-white/60">
          {acc.balance} {acc.currency}
        </p>
      </td>
      <td className={"text-center " + tdStyle}>
        <HButton variant="secondary">
          <PencilIcon className="size-4" />
          Edit
        </HButton>
      </td>
      <td className={"text-center " + tdStyle}>
        <HButton variant="error">Delete</HButton>
      </td>
    </tr>
  );
};

export default AssetRow;
