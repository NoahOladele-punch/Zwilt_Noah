import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom'
import Head from './CommonComp/Navbar/navbar'


import {createStore} from 'redux'

// import SignUpForm from './Authorization/SignUpForm';
// import SignInForm from './Authorization/SignInForm';

import Fb_Main from './Social/Fb_Main'
import Tw_Main from './Social/Tw_Main'
import Inst_Main from './Social/Inst_Main'
import Pin_Main from './Social/Pin_Main'
import Lk_Main from './Social/Lk_Main'
import Tk_Main from './Social/Tk_Main'
import Tn_Main from './Social/Tn_Main'
import UserSettings from './Main/UserSettings'
import SideNavBar from './CommonComp/SideNavBar'


import InstagramRedirect from "./RedirectComp/InstagramRedirect"
import Home from "./Main/Home"
import InstaMedia from "./Social/InstComp/InstaMedia"
import * as serviceWorker from './serviceWorker';
import './Styles/index.css';

import {Provider} from 'react-redux'
import rootReducer from './Store/reducers'

const store  = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

// const PrivateRoute = ({ component: Component, ...props }) => {
//   return (
//     <Route
//       {...props}
//       render={innerProps =>
//         localStorage.getItem("sessionToken")? 
//             <Component {...innerProps} />
//             :
//             <Redirect to="/sign-in" />
//       }
//     />
//   );
// };

const redirect_routes =(
  <Route path="/instagaram-redirect/" component={InstagramRedirect}/>
)

const routing = (
  <React.Fragment>
    <BrowserRouter>   
      <Switch>
        <Provider store= {store}>
          <Route exact path="" component = {Head}/> 
          <Route exact path="" component = {SideNavBar}/> 
          <Route exact path="/" component = {Home}/> 
          <Route exact path="/InstaG" component = {InstaMedia}/> 
          <Route path="/fb" component={Fb_Main} />
          <Route path="/tw" component={Tw_Main} />
          <Route path="/inst" component={Inst_Main}/>
          <Route path="/pin" component={Pin_Main}/>
          <Route path="/Lk" component={Lk_Main}/>
          <Route path="/Tk" component={Tk_Main}/>
          <Route path="/Tn" component={Tn_Main}/>
          <Route path="/user-settings" component={UserSettings}/>
        </Provider>
      </Switch>

      {/* <Route exact path = "/sign-up" component={SignUpForm}/> */}
      {/* <Route exact path = "/sign-in" component={SignInForm}/> */}
      {redirect_routes}
    </BrowserRouter>
  </React.Fragment>
)

ReactDOM.render(
  
    routing,
  document.getElementById('root') 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

//dadce1 light blue
