"use client";

import Image from "next/image";
import Link from "next/link";
import { Title } from "./title-component";
import { Button } from "../ui";
import { PlusIcon } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

  className?: string;
}

export function ProductCard({ imageUrl, id, name, price, className }: Props) {
  return (
    <div className={className}>
      <Link href="/product/1">
        <div className="">
          <Image width={215} height={215} alt="Logo" src={imageUrl} />
        </div>
        <Title text={name} className="mb-1 font-bold mt-3" size="sm" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          enim?
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[20px]">
            from <b>{price} $</b>
          </span>
          <Button variant="secondary" className="text-base font-bold">
            <PlusIcon size={20} className="mr-1" />
            Plus
          </Button>
        </div>
      </Link>
    </div>
  );
}
