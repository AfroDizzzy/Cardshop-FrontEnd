import { ShoppingCart } from "lucide-react";
import "./productMerchantsStyles.css";
const mockMerchantData = [
  {
    store: "NZ/NovaGames",
    title: "Craterhoof Behemoth",
    condition: "NM / SP",
    price: "$25.10",
    setName: "Tarkir: Dragonstorm",
    features: [],
  },
  {
    store: "NZ/ShuffleAndCut",
    title: "Craterhoof Behemoth",
    condition: "NM / SP",
    price: "$26.10",
    setName: "Tarkir: Dragonstorm",
    features: [],
  },
  {
    store: "NZ/HobbyMaster",
    title: "Craterhoof Behemoth (Borderless)",
    condition: "NM / SP",
    price: "$26.70",
    setName: "Tarkir: Dragonstorm",
    features: ["Borderless"],
  },
  {
    store: "NZ/CardMerchantTakapuna",
    title: "Craterhoof Behemoth (Borderless)",
    condition: "NM / SP",
    price: "$27.00",
    setName: "Tarkir: Dragonstorm",
    features: ["Borderless"],
  },
  {
    store: "NZ/Spellbound",
    title: "Craterhoof Behemoth (Retro Frame)",
    condition: "NM / SP",
    price: "$34.70",
    setName: "Innistrad Remastered",
    features: ["Retro", "Foil"],
  },
];

export const ProductMerchants = () => {
  return (
    <div className="merchant-container">
      {/* Header */}
      <div className="merchant-header">
        <h2 className="merchant-title">Available at Merchants</h2>
        <div className="merchant-header-info">
          <ShoppingCart className="merchant-header-icon" />
          <span className="merchant-header-text-full">
            {mockMerchantData.length} listings
          </span>
          <span className="merchant-header-text-short">
            {mockMerchantData.length}
          </span>
        </div>
      </div>

      {/* Merchant List */}
      <div className="merchant-list">
        {mockMerchantData.map((merchant, index) => (
          <div key={index} className="merchant-card">
            <div className="merchant-card-content">
              <div className="merchant-card-left">
                <div className="merchant-store-row">
                  <h3 className="merchant-store-name">
                    {merchant.store.replace("NZ/", "")}
                  </h3>
                  {merchant.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="merchant-feature-badge">
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="merchant-product-title">{merchant.title}</p>
                <div className="merchant-details-row">
                  <span>Condition: {merchant.condition}</span>
                  <span className="merchant-set-name">
                    Set: {merchant.setName}
                  </span>
                </div>
              </div>
              <div className="merchant-card-right">
                <div className="merchant-price">{merchant.price}</div>
                <button className="merchant-button">View Deal</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
