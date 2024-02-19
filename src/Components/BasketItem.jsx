import { useContext } from "react"
import { contextShop } from "../Context";

export default function BasketItem({ id, name, price, quantity }) {

    const {removeFromBasket, addOneItem, diffOneItem} = useContext(contextShop);

    const totalPrice = price * quantity
    return (
        <li className="collection-item">
            {name} <span className="diffOneBtn" onClick={() => diffOneItem(id)}>-</span> x{quantity} <span className="addOneBtn" onClick={() => addOneItem(id)}>+</span> = {totalPrice} $
            <span className="secondary-content">
                <i 
                onClick={() => {removeFromBasket(id)}}
                className="material-icons item__delete">close</i>
            </span>
        </li>
    )
}