import ProductBox from "components/ProductBox";
import { useSelector } from "react-redux";
import { State } from "state/types";

function InUsDolarPrice() {
    const data = useSelector((state: State) => state.products.usdData);

    return (
        <ProductBox title="Products (USD)" id={"usd"} products={data} />
    )
}
export default InUsDolarPrice;
