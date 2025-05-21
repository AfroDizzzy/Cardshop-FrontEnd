import useScryfallMTGCardStore from "../../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../../types/ScryfallObject";

export function ProductDetails() {

    const data: ScryfallMTGCard = useScryfallMTGCardStore(
        (state) => state.data
    )

    console.warn(data)
    return (
         <div className="h-[85vh] w-screen flex flex-col">
            <div className="grid grid-cols-2 bg-amber-200 h-full w-[50vw] overflow-hidden">
                {/* Image container with fixed height */}
                <div className="h-full flex items-center justify-center overflow-hidden p-4">
                    {data && <img
                        className="h-full w-full object-contain"
                        alt={data.name}
                        src={data.image_uris?.normal}
                    />}
                </div>

                {/* Right side info with fixed heights */}
                <div className="grid grid-rows-3 h-full">
                    <div className="row-span-1 bg-amber-300 p-4 flex items-center overflow-hidden">
                        <div className="font-bold text-xl">{data.name}</div>
                    </div>
                    <div className="row-span-1 bg-amber-400 p-4 flex items-center overflow-hidden">
                        <div>Oracle Text: {data.oracle_text}</div>
                    </div>
                    <div className="row-span-1 bg-amber-500 p-4 flex items-center overflow-hidden">
                        <div>Price(USD): {data.prices?.usd} </div>
                    </div>
                </div>
            </div>
            </div>
    )
}