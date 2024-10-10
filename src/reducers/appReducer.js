import { cartStorageKey } from "../states";
import { courseInCart } from "../utils";
import { navState, notifications, courseLearning, courses } from '../states';



export const initialAppState = {
  navState: navState,
  courseLearning: courseLearning,
  courses: courses,
  notifications: notifications,
  cartState: []
}

let rawStore = localStorage.getItem(cartStorageKey) || null;
let fetchedStore = JSON.parse(rawStore);
let courseArr = [...fetchedStore.my_courses];




export default function appReducer (state = initialAppState, action) {

    if(action.type === "NAV_BTN_CLICK") {
          let modifiedNavState = state.navState.map(item => {
            if(item.id === action.payload) {
              
              return { ...item, isActive: true }
            } else {
              return {...item, isActive: false}
            }

          });

          return { ...state, navState: modifiedNavState }
    }

   
    if(action.type === "SET_NAV_BTN") {

      let pathName = window.location.pathname;

      let modifiedNavState = state.navState.map(item => {
        if(item.route === action.payload) {
          
          return { ...item, isActive: true }
        } else if(item.route === "/explore" && pathName === "/course-detail-page") {
          return { ...item, isActive: true }

        } else {
          return {...item, isActive: false}
        }

      });


     

      return { ...state, navState: modifiedNavState }

    }

    
    if(action.type === "ADD_TO_CART") {     

      
      if(!courseInCart(action.payload)){

        console.log(courseArr);

              let modifiedStore = [...courseArr, action.payload]
              localStorage.setItem(cartStorageKey, JSON.stringify({"my_courses": [...modifiedStore]}))
              console.log(new Date().getMilliseconds())
              return { ...state, cartState: [...modifiedStore] }
            } 
   
      return { ...state }

    }

    if(action.type === "REMOVE_FROM_CART") {
     
        if(courseInCart(action.payload)){
          
          let modifiedStore = courseArr.filter(course => course.id !== action.payload.id);
          localStorage.setItem(cartStorageKey, JSON.stringify({"my_courses": [...modifiedStore]}))
  
          return { ...state, cartState: [...modifiedStore] }
        }    
           
    }

    if(action.type === "SET_CART") {
      return { ...state, cartState: [...courseArr]}
    }



    return state;
  }