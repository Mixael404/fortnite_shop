import { useContext } from "react"
import { shopContext } from "./Shop"
import { contextShop } from "../Context";
export default function BasketItem({ id, name, price, quantity }) {
    const removeFn = useContext(shopContext).removeFromBasket;
    const addOne = useContext(shopContext).addOneItem;
    const diffOne = useContext(shopContext).diffOneItem;

    const {example} = useContext(contextShop)
    console.log(example);

    const totalPrice = price * quantity
    return (
        <li className="collection-item">
            {name} <span className="diffOneBtn" onClick={() => diffOne(id)}>-</span> x{quantity} <span className="addOneBtn" onClick={() => addOne(id, name)}>+</span> = {totalPrice} $
            <span className="secondary-content">
                <i 
                onClick={() => {removeFn(id)}}
                className="material-icons item__delete">close</i>
            </span>
        </li>
    )
}