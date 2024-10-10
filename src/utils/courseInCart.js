import { cartStorageKey } from "../states"

export const courseInCart = (course_item) => {
    const rawCart = localStorage.getItem(cartStorageKey) || {};

    let fetchedCart = JSON.parse(rawCart);

    // let checkArr = fetchedCart.my_courses.length > 0 ? fetchedCart.my_courses.filter(item => item.id === course_item.id) : [];

    // let checkArr = fetchedCart.my_courses.some(item => item.id === course_item.id);

    // if (checkArr.length > 0) return true;
    // else return false;

    return fetchedCart.my_courses.some(item => item.id === course_item.id);

   
}