import Basket from "@/components/Basket";
import { ShoppingCartIcon } from "lucide-react";

function BasketPage() {
  return (
    <div className="mx-7 md:mr-8 md:ml-52 mt-32 mb-20 min-h-screen">
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>
      <p className="mt-2 mb-5">
        Review the items in your cart and checkout when ready!
      </p>

      <Basket />
    </div>
  );
}

export default BasketPage;
