import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/amazon-a-logo-transparent.png";
import {
  Home,
  Leaf,
  Video,
  Music,
  MonitorSmartphone,
  MoveRight,
} from "lucide-react";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="hidden md:block fixed left-0 top-0 w-44 overflow-y-auto h-full bg-white z-40">
      <Link href={"/"}>
        <div className="relative -mt-[150px] -ml-[125px]">
          <Image src={Logo} alt="Amazon Logo" width={300} height={300} />
        </div>
      </Link>

      <div className="flex flex-col space-y-4 justify-center items-start mt-6 mx-5">
        <SidebarOption icon={Home} title="Home" />
        <SidebarOption icon={MoveRight} title="Prime" />
        <SidebarOption icon={Leaf} title="Grocery" />
        <SidebarOption icon={Video} title="Video" />
        <SidebarOption icon={Music} title="Music" />
        <SidebarOption icon={MonitorSmartphone} title="Devices" />
      </div>
    </div>
  );
}

export default Sidebar;
