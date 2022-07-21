import ProductBox from "components/ProductBox";
import { useSelector } from "react-redux";
import { State } from "state/types";

function InEuroPrice() {
    const data = useSelector((state: State) => state.products.euroData);

    return (
        <ProductBox title="Products (Euro)" id="euro" products={data}/>
    )
}
export default InEuroPrice;
