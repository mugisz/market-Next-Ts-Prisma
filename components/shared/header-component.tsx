import { cn } from "@/lib/utils";
import Image from "next/image";
import { Container } from "./container-component";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
interface Props {
  className?: string;
}

export function Header({ className }: Props) {
  return (
    <header className={cn("border border-b bg-background", className)}>
      <Container className="flex  items-center justify-between py-8">
        <div className="">
          <h1 className="text-2xl uppercase font-black">Next Shop</h1>
          <p className="text-sm text-gray-400 leading-3">
            pet project by sharabura
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Button
            variant="outline"
            className="flex flex-row items-center gap-3 text-foregroundSmall"
          >
            <User />
            Log in
          </Button>
          <div className="">
            <Button className="group relative">
              <b>520</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart
                  size={16}
                  className=" w-4 relative"
                  strokeWidth={2}
                />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
