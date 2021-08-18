import types from './types';

export const AllItems = (items) =>( {
    type: types.ALL_ITEMS,
        payload: items,
            
    
})
export const AddFav = (item) => ({
    type: types.ADD_FAV,
        payload:item,
    
})

export const AddDetails = (item) => ({
    type: types.ADD_DETAIL,
    payload:item,
})

export const ContactInfo = (info) => ({
    type: types.GET_CONTACT_MESSAGE,
    payload:info,
})
export const AddToShopping = (item) => ({
    type: types.ADD_TO_SHOPPING,
    payload:item,  
})
export const ToggleToast = () => ({
    type: types.TOGGLE_TOAST,
    
})
export const IncreaseQuantity = (item) => ({
    type: types.INCREASE_QUANTITY,
    payload:item,
})
export const DecreaseQuantity = (item) => ({
    type: types.DECREASE_QUANTITY,
    payload:item,
})