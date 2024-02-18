import { useContext } from "react"
import { contextShop } from "../Context";
import { shopContext } from "./Shop"


export default function GoodsItem({ mainId, displayName, description, price, img, addItem }) {
    const item = {
        mainId, 
        displayName, 
        description, 
        price, 
        img,
    }
    
    // const addToBasket = useContext(shopContext).addToBasket;
    const {addToBasket} = useContext(contextShop)

    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={img} alt={displayName}/>
            </div>
            <div className="card-content">
            <span className="card-title">{displayName}</span>
                <p> {description} </p>
            </div>
            <div className="card-action">
                <button 
                onClick={() => {
                    addToBasket(item)
                }}
                className="btn">Buy</button>
                <span className="right" style={{fontSize: '1.5rem'}}> {price} $ </span>
            </div>
        </div>

    )
}

// offerTag.text - desc
// price.regularPrice - price
// displayAssets[0].url - img