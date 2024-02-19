import { useContext, useEffect } from "react"
import { contextShop } from "../Context"

export default function Alert(){

    const { alertName, closeAlert } = useContext(contextShop)

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000)
        return () => {
            clearTimeout(timerId)
        }
        
    }, [alertName])
    return(
        <div id="toast-container">
            <div className="toast">
                {alertName} added to basket
            </div>
        </div>
    )
}