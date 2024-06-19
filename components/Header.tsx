"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-a-logo-transparent.png";
import { Search, ShoppingCart, User } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

function Header() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header
      className="sticky top-0 flex justify-between items-center px-5 py-5 space-x-3 md:space-x-5
     bg-white z-30 w-full"
    >
      <Link href={"/"}>
        <Image
          className="md:hidden min-w-[50px] min-h-[50px] w-16 h-16"
          src={Logo}
          alt="Amazon Logo"
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full flex-1 border-b-2 border-b-teal shadow-sm shadow-teal"
      >
        <input
          type="text"
          name="input"
          placeholder="What do you need today?"
          className="flex-1 px-2 md:px-4 rounded-l-full outline-none text-xs md:text-base text-teal placeholder:text-amazon"
        />

        <button type="submit">
          <Search className="h-10 px-2 w-10 text-teal cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-2 md:space-x-5">
        <Link href={"/basket"}>
          <div className="flex items-center cursor-pointer">
            <ShoppingCart className="h-10 px-2 w-10 text-teal " />
            <div className="hidden md:flex flex-col justify-center">
              <p className="text-xs">
                {cart.length > 0
                  ? `${cart.length} item${cart.length > 1 ? "s" : ""}`
                  : "No items"}
              </p>
              <p className="text-sm font-bold">{total}</p>
            </div>
          </div>
        </Link>

        {/* <div className="flex items-center cursor-pointer">
          <User className="h-10 px-2 w-10 text-teal" />
          <div className="hidden md:flex flex-col justify-center">
            <p className="text-xs">Hello,</p>
            <p className="text-sm font-bold">Sign In</p>
          </div>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
