import { cartStorageKey } from "../states"

export const courseInCart = (course_item) => {
    const rawCart = localStorage.getItem(cartStorageKey) || {};

    let fetchedCart = JSON.parse(rawCart);

    return fetchedCart.my_courses.some(item => item.id === course_item.id);

   
}