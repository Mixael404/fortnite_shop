import { useContext } from "react"
import { shopContext } from "./Shop"
import { contextShop } from "../Context";


export default function Cart(){
    const {order, handleBasketShow} = useContext(contextShop);
    return(
        <div 
        onClick={handleBasketShow}
        className="cart light-green accent-3">
            <i className="material-icons">shopping_cart</i>
            {order.length ? <span className="cart__quantity">{order.length}</span> : null}
        </div>
    )
}