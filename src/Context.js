import { createContext, useReducer } from "react";
import {reducer} from './Reducer'

export const contextShop = createContext();
const initialValue = {
    goods: [],
    loading: true,
    order: [],
    showBasket: false,
    alertName: '',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialValue)

    value.addToBasket = (item) => {
        dispatch({type: "ADD_TO_BASKET", payload: {item: item}})
    }
    value.addOneItem = (id) => {
        dispatch({type: "ADD_ONE_ITEM", payload: {id: id}})
    }
    value.diffOneItem = (id) => {
        dispatch({type: "DIFF_ONE_ITEM", payload: {id: id}})
    }
    value.removeFromBasket = (id) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload: {id: id},})
    }
    value.closeAlert = () => {
        dispatch({type: "CLOSE_ALERT"})
    }
    value.handleBasketShow = () => {
        dispatch({type: 'SHOW_MODAL'})
    }
    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }

    
    return <contextShop.Provider value={value}>
        {children}
    </contextShop.Provider> 
}