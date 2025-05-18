import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchIndividualCardDataFromScryfall } from "../../../hooks/cardDetailsHooks";
import type { EdhrecSearchResponseObject } from "../../../types/EdhrecSearchResponseObject";

export function ProductDetails() {
    const dummyData: EdhrecSearchResponseObject = {
        id: '',
        image: '',
        label: '',
        url: ''
    }
    const { data } = useQuery({
        queryKey: ['IndividualCardDataFromScryfall'],
        //queryFn: () => fetchIndividualCardDataFromScryfall(dummyData)
    });

    return (

        <div className="grid grid-cols-2 bg-amber-200 h-full">
            <div className="">
                {/* {data && (() => { console.log(data); return null; })()} */}
                {/* Render card details here if needed */}
            </div>
            <div className="grid grid-rows-3">
                <div className="row-span-1 bg-amber-300">Card Name</div>
                <div className="row-span-1 bg-amber-400">Information</div>
                <div className="row-span-1 bg-amber-500">Price Data</div>
            </div>
        </div>
    )
}