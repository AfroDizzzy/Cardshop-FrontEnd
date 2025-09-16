import { ShoppingCart } from "lucide-react";
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
    <div className="w-full h-full bg-gray-50 md:border-l border-gray-200">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Available at Merchants
            </h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">
                {mockMerchantData.length} listings
              </span>
              <span className="sm:hidden">{mockMerchantData.length}</span>
            </div>
          </div>
        </div>

        {/* Merchant List */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4">
          {mockMerchantData.map((merchant, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                      {merchant.store.replace("NZ/", "")}
                    </h3>
                    {merchant.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-1 text-sm md:text-base truncate">
                    {merchant.title}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs md:text-sm text-gray-500 space-y-1 sm:space-y-0">
                    <span>Condition: {merchant.condition}</span>
                    <span className="truncate">Set: {merchant.setName}</span>
                  </div>
                </div>
                <div className="text-right ml-3 flex-shrink-0">
                  <div className="text-lg md:text-xl font-bold text-green-600 mb-2">
                    {merchant.price}
                  </div>
                  <button className="bg-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                    View Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
