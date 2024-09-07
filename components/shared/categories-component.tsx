"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Burgers" },
  { id: 2, name: "Combo" },
  { id: 3, name: "Snacks" },
  { id: 4, name: "Cocktails" },
  { id: 5, name: "Coffee" },
  { id: 6, name: "Drinks" },
  { id: 7, name: "Desserts" },
];
export const Categories: React.FC<Props> = ({ className }) => {
  const isActive = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((item) => (
        <Link
          key={item.id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            item.id === isActive &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${item.name}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
