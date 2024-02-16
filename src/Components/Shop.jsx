import { createContext, useEffect, useState } from "react"
import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import BasketList from "./BasketList";
import Alert from "./Alert";

export const shopContext = createContext(null);

export default function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [showBasket, setShowBasket] = useState(false)
    const [alertName, setAlertName] = useState('')


    const addOneItem = (id, name) => {
        const newOrder = order.map((el) => {
            if(el.mainId === id){
                el.quantity++;
            }
            return el
        })
        setOrder(newOrder);
    }
    const diffOneItem = (id) => {
        let indexOfTargetElement;
        const newOrder = order.map((el, index) => {
            if(el.mainId === id){
                indexOfTargetElement = index
                el.quantity--;
            }
            return el
        })
        if(newOrder[indexOfTargetElement].quantity < 1){
            newOrder.splice(indexOfTargetElement, 1)
        }
        setOrder(newOrder)
    }
    const closeAlert = () => {
        setAlertName('')
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(item => item.mainId !== id)
        setOrder(newOrder)
    }

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
            const newOrder = order.map((el) => {
                if(el.mainId === item.mainId){
                    el.quantity++;
                }
                return el
            })
            setOrder(newOrder)
        }
        console.log(item.displayName);
        setAlertName(item.displayName)
    }

    const handleBasketShow = () => {
        setShowBasket(!showBasket)
    }


    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY,
            }
        })
            .then(response => response.json())
            .then(data => {
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    }, [])
    const contextValue = {
        addToBasket,
        handleBasketShow,
        order,
        removeFromBasket,
        addOneItem,
        diffOneItem,
    }
    return (
        <shopContext.Provider value={contextValue}>
        <main className="container content">
            {showBasket && <BasketList />}
            <Cart quantity={order.length}/>
            {loading && <Preloader />}
            {!loading && 
            // <h2>Goods</h2>
            <GoodsList addItem={setOrder} goods={goods}/>
            }
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
        </shopContext.Provider>
    )
}