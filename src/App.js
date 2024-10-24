import { createContext, useCallback, useReducer, useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import {app, database} from './firebaseConfig/firebaseConfig.js';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import './App.css';
import './styles/header.css'
import { Header, AsideNav, ContentView } from './components';
import { appReducer, initialAppState } from './reducers';
import {Dashboard} from './components/dashboard';
import {CourseDetailPage, Explore, InstructorProfilePage} from './components/explore';
import {MyLearning, VideoPage} from './components/mylearning';
import{Settings} from './components/settings'
import { Login, Registration, PasswordReset, Loader } from './authpages'




export const AppContext = createContext();



function App() {

  let currentPath = window.location.pathname;
  

  const [showMenu, setShowMenu] = useState(false);


 
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

  const setAuthState = useCallback(() => {
    return appDispatch({
      type: "SET_AUTH_STATE"
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
    setAuthState();

    return () => {}
  },[setCartState, setAuthState]);

  useEffect(() => {
    setNavBtn(currentPath);

    return () => {}
  },[currentPath, setNavBtn]);
  

  const [appState, appDispatch] = useReducer(appReducer, initialAppState);
  console.log(appState);
  console.log(new Date().getMilliseconds())
  console.log(appState.cartState);

  const { authState } = appState;
  const { isAuthenticated } = authState;
  console.log(isAuthenticated);

 
  return (
    <div className="App">
      <AppContext.Provider value={{
        appState, 
        navBtnClick, 
        addToCart, 
        removeFromCart, 
        showMenu,
        setShowMenu
        }}>
       <Router>
        { !isAuthenticated 
            ? 
            (
              <Routes>
                <Route path='/' element={<Login/>}/>
                {/* <Route path='/registration' element={<Registration/>}/>
                <Route path='/password-reset' element={<PasswordReset/>}/> */}
                <Route path='/loader' element={<Loader/>}/>
                <Route path='*' element={<Login/>}/>
              </Routes>
            )
          :
          (<>
          
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
              <Route path='/instructor-profile-page' element={<InstructorProfilePage/>}/>
              <Route path='/video-page' element={<VideoPage/>}/>
            </Routes>
          </ContentView>
          </>)
        }
       </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
