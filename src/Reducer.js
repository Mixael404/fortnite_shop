export function reducer(state, { type, payload }) {
    switch (type) {
        case ('ADD_TO_BASKET'):
            {const itemIndex = state.order.findIndex((element) => {
                return element.mainId === payload.item.mainId;
            })
            if (itemIndex < 0) {
                const newItem = {
                    ...payload.item,
                    quantity: 1,
                }
                return {
                    ...state,
                    order: [...state.order, newItem],
                    alertName: payload.item.displayName
                }
                // setOrder([...order, newItem])
            } else {
                const newOrder = state.order.map((el) => {
                    if (el.mainId === payload.item.mainId) {
                        el.quantity++;
                    }
                    return el
                })
                return {
                    ...state,
                    order: newOrder,
                    alertName: payload.item.displayName
                }
            }}
        case ('ADD_ONE_ITEM'):
            return {
                ...state,
                order: state.order.map((el) => {
                    if (el.mainId === payload.id) {
                        el.quantity++;
                    }
                    return el
                }),
            }
        case ('DIFF_ONE_ITEM'):{
            let indexOfTargetElement;
            const newOrder = state.order.map((el, index) => {
                if (el.mainId === payload.id) {
                    indexOfTargetElement = index
                    el.quantity--;
                }
                return el
            })
            if (newOrder[indexOfTargetElement].quantity < 1) {
                newOrder.splice(indexOfTargetElement, 1)
            }
            return {
                ...state,
                order: newOrder

            }}
        case ('REMOVE_FROM_BASKET'):
            return {
                ...state,
                order: state.order.filter(item => item.mainId !== payload.id)
            }
        case ('CLOSE_ALERT'):
            return {
                ...state,
                alertName: '',
            }
        case ('SHOW_MODAL'):
            return{
                ...state,
                showBasket: !state.showBasket
            }
        default:
            return state
    }
}