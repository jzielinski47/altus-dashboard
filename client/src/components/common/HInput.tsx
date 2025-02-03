import { Description, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

interface iHInput {
  name?: string;
  description?: string;
  placeholder?: string;
  value?: string | number;
  type?: "text" | "number";
  onChange?: ({ target: { value } }: { target: { value: any } }) => void;
}

const HInput = ({ name, description, placeholder, value, type, onChange }: iHInput) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium text-white/[87%]">{name}</Label>
      <Description className="text-sm/6 text-white/60">{description}</Description>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        className={clsx(
          "mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
        placeholder={placeholder}
      />
    </Field>
  );
};

export default HInput;
