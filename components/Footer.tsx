import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-logo-transparent.png";

function Footer() {
  return (
    <footer className="relative bg-teal w-full z-40 px-7 py-10 text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 items-start">
        <Link href={"/"} className="col-span-2 md:col-span-1">
          <Image src={Logo} alt="Amazon Logo" height={75} />
        </Link>

        <nav>
          <p className="font-bold mb-2">Get to Know Us</p>
          <ul className="text-sm">
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </nav>
        <nav>
          <p className="font-bold mb-2">Amazon Payment Products</p>
          <ul className="text-sm">
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </nav>
        <nav>
          <p className="font-bold mb-2">Let Us Help You</p>
          <ul className="text-sm">
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-10">
        <p className="font-bold uppercase">
          This project is for demo purposes only. We do not own or affiliate
          with Amazon and/or any of its subsidiaries in any form.
        </p>
        <p className="text-xs">
          Copyright &copy; 2024 by Scott Martin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
