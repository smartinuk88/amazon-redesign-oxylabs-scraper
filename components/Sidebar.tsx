import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-a-logo-transparent.png";

function Sidebar() {
  return (
    <div className="hidden md:block fixed left-0 top-0 w-44 overflow-y-auto h-screen bg-white z-40">
      <Link href={"/"}>
        <div className="relative -mt-[150px] -ml-[125px]">
          <Image src={Logo} alt="Amazon Logo" width={300} height={300} />
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
