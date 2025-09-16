import useScryfallMTGCardStore from "../../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../../types/ScryfallObject";

export function ProductDetails() {
  const data: ScryfallMTGCard = useScryfallMTGCardStore((state) => state.data);

  console.warn(data);
  return (
    <div className="h-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Card Image */}
        <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-sm w-full">
            <img
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              alt={data.name}
              src={data.image_uris?.normal}
            />
          </div>
        </div>

        {/* Card Information */}
        <div className="p-8 flex flex-col justify-between">
          {/* Header */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {data.name}
              </h1>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-mono text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {data.mana_cost}
                </span>
                <span className="text-gray-600 font-medium">
                  {data.type_line}
                </span>
              </div>
            </div>
          </div>

          {/* Oracle Text */}
          <div className="flex-1 py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Oracle Text
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {data.oracle_text}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Release Date
                </span>
                <p className="text-gray-900">{data.released_at}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Average Price
                </span>
                <p className="text-2xl font-bold text-green-600">
                  ${data.prices?.usd}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
