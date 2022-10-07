import { fetchUser, fetchCart, fetchTotal } from "../utils/fetchLocalStorageData"

const userInfo = fetchUser();
const cartInfo = fetchCart();
const total = fetchTotal();

export const initialState = {
    user: userInfo,
    foodItems: null,
    total: [],
    cartShow: false,
    cartItems: cartInfo,
}
