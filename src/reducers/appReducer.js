import { cartStorageKey } from "../states";
import { courseInCart } from "../utils";
import { navState, notifications, courseLearning, courses } from '../states';

// Define the initial app state
export const initialAppState = {
  navState: navState,
  courseLearning: courseLearning,
  courses: courses,
  notifications: notifications,
  cartState: [] // This will be populated based on localStorage
};

// Try to load the cart from localStorage, with fallback for errors
let rawStore = localStorage.getItem(cartStorageKey);
let courseArr = [];
try {
  let fetchedStore = JSON.parse(rawStore);
  courseArr = fetchedStore?.my_courses || [];
} catch (error) {
  console.error("Failed to parse localStorage", error);
}

export default function appReducer(state = initialAppState, action) {
  
  // NAV_BTN_CLICK: Handles navigation button clicks
  if (action.type === "NAV_BTN_CLICK") {
    const modifiedNavState = state.navState.map(item => ({
      ...item,
      isActive: item.id === action.payload // Set active based on matching id
    }));

    return { ...state, navState: modifiedNavState };
  }

  // SET_NAV_BTN: Sets the active nav button based on route or pathname
  if (action.type === "SET_NAV_BTN") {
    const pathName = window.location.pathname;
    
    const modifiedNavState = state.navState.map(item => {
      if (item.route === action.payload) return { ...item, isActive: true };
      
      // Handle special conditions for routes
      if (item.route === "/explore" && ["/course-detail-page", "/instructor-profile-page"].includes(pathName)) {
        return { ...item, isActive: true };
      } else if (item.route === "/mylearning" && pathName === "/video-page") {
        return { ...item, isActive: true };
      } else if (item.route === "/dashboard" && pathName === "/") {
        return { ...item, isActive: true };
      }
      
      return { ...item, isActive: false };
    });

    return { ...state, navState: modifiedNavState };
  }

  // ADD_TO_CART: Adds a course to the cart
  if (action.type === "ADD_TO_CART") {
    if (!courseInCart(action.payload)) {
      const modifiedStore = [...courseArr, action.payload];
      localStorage.setItem(cartStorageKey, JSON.stringify({ "my_courses": modifiedStore }));
      
      return { ...state, cartState: modifiedStore };
    }
    return state;
  }

  // REMOVE_FROM_CART: Removes a course from the cart
  if (action.type === "REMOVE_FROM_CART") {
    if (courseInCart(action.payload)) {
      const modifiedStore = courseArr.filter(course => course.id !== action.payload.id);
      localStorage.setItem(cartStorageKey, JSON.stringify({ "my_courses": modifiedStore }));
      
      return { ...state, cartState: modifiedStore };
    }
    return state;
  }

  // SET_CART: Initializes cart from localStorage
  if (action.type === "SET_CART") {
    return { ...state, cartState: courseArr };
  }

  return state; // Return current state for unmatched actions
}


// import { cartStorageKey } from "../states";
// import { courseInCart } from "../utils";
// import { navState, notifications, courseLearning, courses } from '../states';



// export const initialAppState = {
//   navState: navState,
//   courseLearning: courseLearning,
//   courses: courses,
//   notifications: notifications,
//   cartState: []
// }

// let rawStore = localStorage.getItem(cartStorageKey) || null;
// let fetchedStore = JSON.parse(rawStore);
// let courseArr = [...fetchedStore.my_courses];




// export default function appReducer (state = initialAppState, action) {

//     if(action.type === "NAV_BTN_CLICK") {
//           let modifiedNavState = state.navState.map(item => {
//             if(item.id === action.payload) {
              
//               return { ...item, isActive: true }
//             } else {
//               return {...item, isActive: false}
//             }

//           });

//           return { ...state, navState: modifiedNavState }
//     }

   
//     if(action.type === "SET_NAV_BTN") {

//       let pathName = window.location.pathname;

//       let modifiedNavState = state.navState.map(item => {
//         if(item.route === action.payload) {
          
//           return { ...item, isActive: true }
//         } else if(item.route === "/explore" && pathName === "/course-detail-page") {
//           return { ...item, isActive: true }

//         } else if(item.route === "/explore" && pathName === "/instructor-profile-page") {
//           return { ...item, isActive: true }

//         }  else if(item.route === "/mylearning" && pathName === "/video-page") {
//         return { ...item, isActive: true }

//       } else if(item.route === "/dashboard" && pathName === "/") {
//           return { ...item, isActive: true }

//         } else {
//           return {...item, isActive: false}
//         }

//       });


     

//       return { ...state, navState: modifiedNavState }

//     }

    
//     if(action.type === "ADD_TO_CART") {     

      
//       if(!courseInCart(action.payload)){

//         console.log(courseArr);

//               let modifiedStore = [...courseArr, action.payload]
//               localStorage.setItem(cartStorageKey, JSON.stringify({"my_courses": [...modifiedStore]}))
//               console.log(new Date().getMilliseconds())
//               return { ...state, cartState: [...modifiedStore] }
//             } 
   
//       return { ...state }

//     }

//     if(action.type === "REMOVE_FROM_CART") {
     
//         if(courseInCart(action.payload)){
          
//           let modifiedStore = courseArr.filter(course => course.id !== action.payload.id);
//           localStorage.setItem(cartStorageKey, JSON.stringify({"my_courses": [...modifiedStore]}))
  
//           return { ...state, cartState: [...modifiedStore] }
//         }    
           
//     }

//     if(action.type === "SET_CART") {
//       return { ...state, cartState: [...courseArr]}
//     }



//     return state;
//   }