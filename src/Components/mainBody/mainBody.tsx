import { ProductDetails } from "./productDetails/productDetails";
import { ProductMerchants } from "./productMerchants/productMerchants";

export function MainBody() {
    return (<div className='mainbody grid-rows-2 h-[85vh]  bg-gray-100'>
        <div className="grid-span-1">
            <ProductDetails></ProductDetails>
        </div>
        <div className="grid-span-2">
            <ProductMerchants></ProductMerchants>
        </div>
    </div>)
}