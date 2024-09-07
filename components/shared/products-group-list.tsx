"use client";

import { cn } from "@/lib/utils";
import { Title } from "./title-component";
import { ProductCard } from "./product-card-component";
import { useIntersection } from "react-use";
import React from "react";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  products: any[];
  listClassName?: string;
  categoryId: number;
  className?: string;
}

export function ProductGroupList({
  title,
  className,
  products,
  listClassName,
  categoryId,
}: Props) {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, title, categoryId]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} className="mb-5 font-extrabold" size="lg" />
      <div className={cn("grid grid-cols-3 gap-[50px]", className)}>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.item[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
