"use client";

import { IFilterChecbox } from "@/interface/filters-interface";
import { Input } from "../ui";
import { FilterCheckbox } from "./filter-checkbox-component";
import { useState } from "react";

interface Props {
  title: string;
  items: IFilterChecbox[];
  defaultItems?: IFilterChecbox[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];

  className?: string;
}

export function CheckboxFilterGruop({
  title,
  items,
  defaultItems,
  limit,
  className,
  searchInputPlaceholder,
  onChange,
  defaultValue,
}: Props) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const list = showAll ? items : defaultItems?.slice(0, limit);
  const filterList = list?.filter((item) =>
    item.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder || "Search "}
          className="bg-gray-50 border-none"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {filterList?.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>
      {limit && limit < items?.length && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3 text-sm"
          >
            {showAll ? "Show less" : "+ Show all"}
          </button>
        </div>
      )}
    </div>
  );
}
