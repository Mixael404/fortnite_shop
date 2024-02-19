import GoodsItem from "./GoodsItem"
import { contextShop } from "../Context"
import { useContext } from "react"


export default function GoodsList(){

    const {goods = []} = useContext(contextShop)
    if(!goods.length){
        return(
            <h3>Nothing here</h3>
        )
    }
    return(
        <div className="goods">
            {
                goods.map((item, index) => <GoodsItem key={index} 
                mainId={item.mainId}
                displayName={item.displayName}
                description={"Some description"}
                price={item.price.regularPrice}
                img={item.displayAssets[0].url}
                />)
            }
        </div>
    )
}