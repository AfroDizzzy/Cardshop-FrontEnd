import { ProductDetails } from "./productDetails/productDetails";
import { ProductMerchants } from "./productMerchants/productMerchants";

export function MainBody() {
    return (<div className='mainbody h-[85vh] flex flex-row flex-grow bg-gray-100'>
        <div className="w-1/2 flex flex-col">
                <ProductDetails></ProductDetails>
        </div>

                <ProductMerchants></ProductMerchants>
    </div>)
}