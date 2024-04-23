"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-a-logo-transparent.png";
import { Search, ShoppingCart, User } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex justify-between items-center px-7 py-5 space-x-5 md:ml-44 bg-white z-20">
      <Link href={"/"}>
        <Image
          className="md:hidden"
          src={Logo}
          alt="Amazon Logo"
          width={75}
          height={75}
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1 border-b-2 border-b-teal shadow-sm shadow-teal"
      >
        <input
          type="text"
          name="input"
          placeholder="What do you need today?"
          className="flex-1 px-4 rounded-l-full outline-none text-amazon placeholder:text-amazon"
        />

        <button type="submit">
          <Search className="h-10 px-2 w-10 text-teal cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5">
        <Link href={"/basket"}>
          <div className="flex items-center cursor-pointer">
            <ShoppingCart className="h-10 px-2 w-10 text-teal " />
            <div className="hidden md:flex flex-col justify-center">
              <p className="text-xs">No items</p>
              <p className="text-sm font-bold">USD 0</p>
            </div>
          </div>
        </Link>

        <div className="flex items-center cursor-pointer">
          <User className="h-10 px-2 w-10 text-teal" />
          <div className="hidden md:flex flex-col justify-center">
            <p className="text-xs">Hello,</p>
            <p className="text-sm font-bold">Sign In</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
