import {CLEAR_CART,ADD_ITEM_TO_CART,REMOVE_ITEM_FROM_CART} from "./types"
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const addItemToCart = item => {
    return {
        type: ADD_ITEM_TO_CART,
        payload: {
            item: item
        }
    }
}

export const removeItemFromCart = item => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        payload: {
            item: item
        }
    }
}