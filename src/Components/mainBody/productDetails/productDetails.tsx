export function ProductDetails(){
    return(
        <div className="grid grid-cols-2 bg-amber-200 h-full">
            <div className=""> card image</div>
            <div className="grid grid-rows-3">
                <div className="row-span-1 bg-amber-300">Card Name</div>
                <div className="row-span-1 bg-amber-400">Information</div>
                <div className="row-span-1 bg-amber-500">Price Data</div>
            </div>
        </div>
    )
}