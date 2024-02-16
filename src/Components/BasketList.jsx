import { useContext } from "react"
import BasketItem from "./BasketItem"
import { shopContext } from "./Shop"

export default function BasketList() {
    const order = useContext(shopContext).order;
    const closeBasket = useContext(shopContext).handleBasketShow;

    let totalPrice;
    if(order.length){
        totalPrice = order.reduce((acc, el) => {
            return acc + el.price * el.quantity;
        }, 0)
    } else{
        totalPrice = 0
    }

    return (
        <ul className="collection basket__list">
            <li className="collection-item active">Basket</li>
            {order.length ?
                order.map(item => <BasketItem key={item.mainId}
                    id={item.mainId}
                    name={item.displayName}
                    price={item.price}
                    quantity={item.quantity}
                />)
                : <li className="collection-item">Basket is empty</li>
            }
            <li className="collection-item active">Total: {totalPrice} $
            </li>
            <li className="collection-item">
            <button className="btn-small orderBtn">Order</button>
            </li>
            <i
            onClick={closeBasket}
            className="material-icons basket__close">close</i>
            
        </ul>
    )
}