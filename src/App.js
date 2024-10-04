import { createContext, useCallback, useReducer } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './styles/header.css'
import { Header, AsideNav, ContentView } from './components';
import { navState } from './states';
import { appReducer } from './reducers';
import {Dashboard} from './components/dashboard';
import {Explore} from './components/explore';
import {MyLearning} from './components/mylearning';
import{Settings} from './components/settings'




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
  

  const [appState, appDispatch] = useReducer(appReducer, initialAppState);
  console.log(appState);

 
  return (
    <div className="App">
      <AppContext.Provider value={{appState, navBtnClick}}>
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
          </Routes>
        </ContentView>
       </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
