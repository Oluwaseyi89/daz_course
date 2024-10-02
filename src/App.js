import { act, createContext, useCallback, useReducer, useState } from 'react';
import './App.css';
import './styles/header.css'
import { Header, AsideNav, ContentView } from './components';
import { navState } from './states/navState';
// import AppContext from './components/AppContext';

export const AppContext = createContext();


function App() {

  const initialAppState = {
    navState: navState,
    cartState: []
  }

  const navBtnClick = useCallback((id) => {
    return appDispatch({
      type: "NAV_BTN_CLICK",
      payload: id      
    })
  },[]);

  const appReducer = (state = initialAppState, action) => {

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

  const [appState, appDispatch] = useReducer(appReducer, initialAppState);
  console.log(appState);

 
  return (
    <div className="App">
      <AppContext.Provider value={appState}>
      <Header/>
      <AsideNav navBtnClick={navBtnClick}/>
      <ContentView>
        <p>I am a child</p>
        <p>I am another child</p>
        <p>I am the last child</p>
      </ContentView>
      </AppContext.Provider>
    </div>
  );
}

export default App;
