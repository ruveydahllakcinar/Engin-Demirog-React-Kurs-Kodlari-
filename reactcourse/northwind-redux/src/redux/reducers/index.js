import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"



const rootReducer = combineReducers({ //Bu fonksiyon
    changeCategoryReducer, // Bunlar birer obje
    categoryListReducer,
    productListReducer,
    cartReducer,
    saveProductReducer
})

export default rootReducer;