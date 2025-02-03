import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface iList {
  id: number;
  name: string;
}

interface iHListbox {
  name: string;
  list: iList[];
  value?: iList;
  onChange?: Dispatch<SetStateAction<{ id: number; name: string }>>;
}

const HListBox = ({ name, list, value, onChange }: iHListbox) => {
  const [selected, setSelected] = useState(value || list[0]);

  const handleChange = (newValue: iList) => {
    setSelected(newValue);
    onChange?.(newValue);
  };

  useEffect(() => {
    setSelected(list[0]);
    onChange?.(list[0]);
  }, []);

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-white/[87%]">{name}</Label>
      <Listbox value={selected} onChange={handleChange}>
        <ListboxButton
          className={clsx(
            "relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white/[87%] mt-1",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            " rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none h-64",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {list.map((elem) => (
            <ListboxOption
              key={elem.name}
              value={elem}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{elem.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

export default HListBox;
