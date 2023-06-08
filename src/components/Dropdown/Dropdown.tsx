import { Listbox } from "@headlessui/react";

type Value = {
  id: string;
  name: string;
};

type Props = {
  valueArray: Value[];
  value: Value;
  setValue: (val: Value) => void;
};

export const Dropdown = ({ setValue, valueArray, value }: Props) => {
  return (
    <Listbox onChange={setValue} by="id">
      <Listbox.Button>{value.name}</Listbox.Button>
      <Listbox.Options className={"relative"}>
        {valueArray.map((value) => (
          <Listbox.Option
            className="relative z-10 bg-gray-100"
            value={value}
            key={value.id}
          >
            {value.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
