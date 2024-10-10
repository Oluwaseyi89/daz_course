import { userState } from "./userState";
export const cartStorageKey = userState.email + "_CART_STORE_KEY";

let fetchCartStore = localStorage.getItem(cartStorageKey) || null;

if(fetchCartStore === null) localStorage.setItem(cartStorageKey, JSON.stringify({ my_courses: [] }));

// export const fetchedSotrage = JSON.parse(localStorage.getItem(cartStorageKey));

// export const cartState = [];