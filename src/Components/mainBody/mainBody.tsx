import useScryfallMTGCardStore from "../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../types/ScryfallObject";
import { ProductDetails } from "./productDetails/productDetails";
import { ProductMerchants } from "./productMerchants/productMerchants";
import "./mainBodyStyles.css";

export function MainBody() {
  const data: ScryfallMTGCard = useScryfallMTGCardStore((state) => state.data);

  return (
    <div className="product-container">
      {/* Desktop: Show both sections */}
      <div className="desktop-layout">
        <div className="desktop-section">
          <ProductDetails />
        </div>
        <div className="desktop-section">
          <ProductMerchants />
        </div>
      </div>

      {/* Mobile: Show only ProductMerchants */}
      <div className="mobile-layout">
        <ProductMerchants />
      </div>
    </div>
  );
}
