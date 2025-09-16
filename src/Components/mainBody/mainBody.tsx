import useScryfallMTGCardStore from "../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../types/ScryfallObject";
import { ProductDetails } from "./productDetails/productDetails";
import { ProductMerchants } from "./productMerchants/productMerchants";

export function MainBody() {
  const data: ScryfallMTGCard = useScryfallMTGCardStore((state) => state.data);

  return (
    <div className="h-[85vh] flex bg-gray-100">
      {/* Desktop: Show both sections */}
      <div className="hidden md:flex w-full">
        <div className="w-1/2">
          <ProductDetails />
        </div>
        <div className="w-1/2">
          <ProductMerchants />
        </div>
      </div>

      {/* Mobile: Show only ProductMerchants */}
      <div className="md:hidden w-full">
        <ProductMerchants />
      </div>
    </div>
  );
}
