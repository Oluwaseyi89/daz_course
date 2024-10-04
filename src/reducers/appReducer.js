
export default function appReducer (state, action) {

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

    return state;
  }