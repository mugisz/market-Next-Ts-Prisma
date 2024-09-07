import { Input } from "../ui";
import { CheckboxFilterGruop } from "./checkbox-filter-group";
import { FilterCheckbox } from "./filter-checkbox-component";
import { RangeSlider } from "./range-slider-component";
import { Title } from "./title-component";

interface Props {
  className?: string;
}

export function Filters({ className }: Props) {
  return (
    <div className={className}>
      <Title className="mb-5 font-bold " size="sm" text="Filters" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="New" value="1" />
        <FilterCheckbox text="New" value="1" />
      </div>
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={500}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="500"
            min={200}
            max={500}
            defaultValue={500}
          />
        </div>
        <RangeSlider min={0} max={500} step={1} />
      </div>
      <CheckboxFilterGruop
        title="Categories"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "cheese", value: "1" },
          { text: "mozarela", value: "2" },
          { text: "chesnok", value: "3" },
          { text: "ohirok", value: "4" },
          { text: "tomatos", value: "5" },
          { text: "meat", value: "6" },
        ]}
        items={[
          { text: "cheese", value: "1" },
          { text: "mozarela", value: "2" },
          { text: "chesnok", value: "3" },
          { text: "ohirok", value: "4" },
          { text: "tomatos", value: "5" },
          { text: "meat", value: "6" },
          { text: "chesnok", value: "7" },
          { text: "ohirok", value: "8" },
          { text: "tomatos", value: "9" },
          { text: "meat", value: "10" },
          { text: "chesnok", value: "11" },
          { text: "ohirok", value: "12" },
          { text: "tomatos", value: "13" },
          { text: "meat", value: "14" },
        ]}
      />
    </div>
  );
}
