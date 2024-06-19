import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-logo-transparent.png";

function Footer() {
  return (
    <footer className="bg-teal w-full z-40 px-7 py-10 text-white">
      <div className="gap-x-4 gap-y-8 items-start">
        <Link
          href={"/"}
          className="col-span-2 md:col-span-1 flex justify-center"
        >
          <Image src={Logo} alt="Amazon Logo" height={75} />
        </Link>
      </div>
      <hr className="mt-10" />
      <div className="text-center mt-10">
        <p className="font-bold uppercase">
          This project is for demonstration purposes only and is not intended
          for commercial use. Content on this site is purely for educational and
          illustrative purposes to showcase web development skills. We do not
          own, affiliate with, or receive endorsement from Amazon or any of its
          subsidiaries. The trademarks and logos used herein belong to their
          respective owners and are used only to directly describe the products
          being demonstrated, without intention to infringe on intellectual
          property rights.
        </p>
        <p className="text-xs mt-2">
          Copyright &copy; 2024 by Scott Martin. All rights reserved. Content on
          this site is created by Scott Martin for demonstration purposes and
          does not represent Amazon.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
