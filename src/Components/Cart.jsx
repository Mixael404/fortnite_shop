import { useContext } from "react"
import { shopContext } from "./Shop"


export default function Cart({quantity = 0}){
    const handleBasketShow = useContext(shopContext).handleBasketShow;
    return(
        <div 
        onClick={handleBasketShow}
        className="cart light-green accent-3">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart__quantity">{quantity}</span> : null}
        </div>
    )
}