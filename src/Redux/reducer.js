import types from './types'
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const INITIAL_STATE = {
    items: [],
    favorites: [],
    details:[],
    contactInfo: [],
    shoppingBox: [],
    toggleToast:false,
    
    
}
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['favorites','details','shoppingBox'] // only navigation will be persisted
  };

 const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ALL_ITEMS:

            return {
                ...state,
                items: action.payload.map(item=>({...item,isFavorite:state.favorites.find(fav=>fav.id === item.id)? true:false,isShopping:state.shoppingBox.find(shop=>shop.id === item.id) ? true:false}))

            }

        case types.ADD_FAV:
            return {
                ...state,

                items: state.items.map(item => item.id === action.payload.id ? ({ ...item, isFavorite: !item.isFavorite}) : ({ ...item })),
                favorites: state.favorites.find(findfav => findfav.id === action.payload.id) ? state.favorites.filter(favitem => favitem.id !== action.payload.id) : [...state.favorites, { ...action.payload, isFavorite: true}], 
                details:{...state.details,isFavorite:!state.details.isFavorite}
            }
        case types.ADD_DETAIL:
            return {
                ...state,
                details: action.payload,
            }
       
        case types.GET_CONTACT_MESSAGE:
            return {
                ...state,
                contactInfo: action.payload.map(item=>({...item}))

            }
        case types.ADD_TO_SHOPPING:

            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? ({
                    ...item,
                    isShopping: !item.isShopping
                }) : ({ ...item })),
                shoppingBox: state.shoppingBox.find(findShop => findShop.id === action.payload.id) ? state.shoppingBox.filter(shopItem => shopItem.id !== action.payload.id) : [...state.shoppingBox, { ...action.payload, isShopping: true,quantity:1 }],
                details: { ...state.details, isShopping: !state.details.isShopping },
                toggleToast: true,

            }
        case types.TOGGLE_TOAST:
            return {
                ...state,
                toggleToast: false
            }
        case types.INCREASE_QUANTITY:
            return {
                ...state,
                shoppingBox:state.shoppingBox.map(item=>item.id === action.payload.id ? ({...item,quantity:item.quantity+1}):({...item}))
            }
            case types.DECREASE_QUANTITY:
                return {
                    ...state,
                    shoppingBox:state.shoppingBox.map(item => item.id===action.payload.id ? ({...item,quantity:(item.quantity<2) ? 1:(item.quantity-1)}):({...item}))
                }
        default:
            return state
    }
}
export default persistReducer(persistConfig,reducer)
