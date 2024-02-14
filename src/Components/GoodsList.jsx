import GoodsItem from "./GoodsItem"


export default function GoodsList({goods = [], addItem}){

    if(!goods.length){
        return(
            <h3>Nothing here</h3>
        )
    }
    return(
        <div className="goods">
            {
                goods.map((item, index) => <GoodsItem addItem={addItem} key={index} 
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