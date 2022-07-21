import ProductBox from "components/ProductBox";
import { useSelector } from "react-redux";
import { State } from "state/types";

function InPrice() {
    const data = useSelector((state: State) => state.products.nzdData);

    return (
        <ProductBox title="Products (NZD)" id={"nzd"} products={data} />
    )
}
export default InPrice;
