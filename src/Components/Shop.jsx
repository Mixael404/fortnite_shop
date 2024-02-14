import { createContext, useEffect, useState } from "react"
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";

export const shopContext = createContext(null);

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);




    const addToBasket = (item) => {
        const itemIndex = order.findIndex((element) => {
            return element.mainId === item.mainId;
        })
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        } else{
            order[itemIndex].quantity++;
            console.log(order);
        }
    }




    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.shop);
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    }, [])
    const contextValue = {
        addToBasket,
    }
    return (
        <shopContext.Provider value={contextValue}>
        <main className="container content">
            <Cart quantity={order.length}/>
            {loading && <Preloader />}
            {!loading && 
            // <h2>Goods</h2>
            <GoodsList addItem={setOrder} goods={goods}/>
            }
        </main>
        </shopContext.Provider>
    )
}