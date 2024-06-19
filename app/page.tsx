import GridOption from "@/components/GridOption";
import Smartwatch from "@/public/images/smartwatch-transparent.png";
import GamingChair from "@/public/images/gaming-transparent.png";
import Laptop from "@/public/images/laptop-transparent.png";
import Candles from "@/public/images/candles-transparent.png";
import Bracelet from "@/public/images/bracelet-transparent.png";
import IPhone from "@/public/images/iphone-transparent.png";
import TShirt from "@/public/images/t-shirt-transparent.png";
import Shampoo from "@/public/images/health-transparent.png";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid w-full justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-5 mb-5">
        <GridOption
          title="Activity trackers & smartwatches"
          image={Smartwatch}
        />
        <GridOption title="Gaming accessories" image={GamingChair} />
        <GridOption title="Laptops for every need" image={Laptop} />
        <GridOption title="Warm & welcoming decor" image={Candles} />
        <GridOption title="Gifts for every Mom" image={Bracelet} />
        <GridOption title="Shop Gadgets" image={IPhone} />
        <GridOption title="Flash Deals" image={TShirt} />
        <GridOption title="Shop health & beauty" image={Shampoo} />
      </div>
    </div>
  );
}
