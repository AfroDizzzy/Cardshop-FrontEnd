import useScryfallMTGCardStore from "../../../store/scryfallSeletedCardStore";
import type { ScryfallMTGCard } from "../../../types/ScryfallObject";

export function ProductDetails() {

    const data: ScryfallMTGCard = useScryfallMTGCardStore(
        (state) => state.data
    )

    console.warn(data)
    return (

        <div className="grid grid-cols-2 bg-amber-200 h-full">
            <div className="row-span-1 h-full">
                {data && <img
                    className=""
                    srcSet=
                        {data.image_uris && `${data.image_uris.small} 200w,`+

                        `${data.image_uris.normal} 800w,`+
                        `${data.image_uris.large} 1000w`}
                    alt={data?.name || "Product image"}
                />}
            </div>
            <div className="grid grid-rows-3">
                <div className="row-span-1 bg-amber-300">
                    {data &&
                        <div>
                            {data.name}
                        </div>}
                </div>
                <div className="row-span-1 bg-amber-400">Information</div>
                <div className="row-span-1 bg-amber-500">Price Data</div>
            </div>
        </div>
    )
}