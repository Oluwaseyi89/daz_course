import { createContext, useCallback, useReducer, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/header.css'
import { Header, AsideNav, ContentView } from './components';
import { appReducer, initialAppState } from './reducers';
import {Dashboard} from './components/dashboard';
import {CourseDetailPage, Explore} from './components/explore';
import {MyLearning} from './components/mylearning';
import{Settings} from './components/settings'



export const AppContext = createContext();



function App() {

  let currentPath = window.location.pathname;

  


 
  const navBtnClick = useCallback((id) => {
    return appDispatch({
      type: "NAV_BTN_CLICK",
      payload: id     
    })
  },[]);

  const setNavBtn = useCallback((location) => {
    return appDispatch({
      type: "SET_NAV_BTN",
      payload: location
    })
  },[]);


  console.log(window.location.pathname);

  const setCartState = useCallback(() => {
    return appDispatch({
      type: "SET_CART"
    });
  },[]);


  const addToCart = useCallback((course_item) => {
    return appDispatch({
      type: "ADD_TO_CART",
      payload: course_item
    })
  },[]);

  const removeFromCart = useCallback((course_item) => {
    return appDispatch({
      type: "REMOVE_FROM_CART",
      payload: course_item
    })
  },[]);

  useEffect(() => {
    setCartState();

    return () => {}
  },[setCartState]);

  useEffect(() => {
    setNavBtn(currentPath);

    return () => {}
  },[currentPath, setNavBtn]);
  

  const [appState, appDispatch] = useReducer(appReducer, initialAppState);
  console.log(appState);
  console.log(new Date().getMilliseconds())
  console.log(appState.cartState);

 
  return (
    <div className="App">
      <AppContext.Provider value={{appState, navBtnClick, addToCart, removeFromCart}}>
       <Router>
        <Header/>
        <AsideNav/>
        <ContentView>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/mylearning' element={<MyLearning/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/course-detail-page' element={<CourseDetailPage/>}/>
          </Routes>
        </ContentView>
       </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
