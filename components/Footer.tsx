import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-logo-transparent.png";

function Footer() {
  return (
    <footer className="absolute end-0 left-0 bg-teal h-44 w-full z-50 px-7 py-5">
      <Link href={"/"}>
        <Image className="" src={Logo} alt="Amazon Logo" height={75} />
      </Link>
    </footer>
  );
}

export default Footer;
