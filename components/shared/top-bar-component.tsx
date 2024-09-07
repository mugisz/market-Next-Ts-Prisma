"use client";

import { cn } from "@/lib/utils";
import { Container } from "./container-component";
import { Title } from "./title-component";
import { Categories } from "./categories-component";
import { SortPopup } from "./sort-popup";

interface Props {
  classNam?: string;
}

export function TopBar({ classNam }: Props) {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-black/5  shadow-lg z-10"
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
}
