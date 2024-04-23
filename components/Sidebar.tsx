import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-a-logo-transparent.png";

function Sidebar() {
  return (
    <div className="hidden md:block fixed left-0 w-44 inset-y-0 bg-white z-20">
      <Link href={"/"}>
        <div className="relative -mt-[150px] -ml-[125px]">
          <Image src={Logo} alt="Amazon Logo" width={300} height={300} />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
