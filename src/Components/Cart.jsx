export default function Cart({quantity = 0}){
    return(
        <div className="cart light-green accent-3">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart__quantity">{quantity}</span> : null}
        </div>
    )
}