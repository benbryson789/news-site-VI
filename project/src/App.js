import React,{useState}  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import LoginPage from './pages/LoginPage';
import AddArticlePage from './pages/AddArticlePage';
import UserContext from './contexts/UserContext';
import AppNav  from './components/AppNav/AppNav';
export const  RenderLoginPage = (props) => {
  return (
    <LoginPage
        userState ={props.userState}
        handleLogin={props.handleLogin} />
  )
}
const RenderLogout = (props) => {
  this.setUserState({ user: null })
  return (
    <Redirect to="/login" />
  )
}
const  App = () => {
  const[userState,setUserState]= useState({user:null});
  const history = useHistory();
const handleLogin = (user) => {
  setUserState({
      user: user
    })
    console.log('userState',userState)
  }
    return (
      <div className="container">
        <div className="row">
      <div className="col-md-12">
      
        <Router>
          <div>
            <Route exact path="/" >
              <HomePage userState= {userState}/>
              </Route>
            <Route exact path="/login" >
              <RenderLoginPage userState={userState} handleLogin={handleLogin}/>
              </Route>
            <Route exact path="/logout" >
            <RenderLogout setUserState= {setUserState}/>
            </Route>
            <Route exact path="/add-article" >
                <AddArticlePage userState= {userState}/>
            </Route>
            <Route exact path="/articles/:articleID" >
            <ArticlePage userState= {userState}/>
            </Route>
            <Route exact path="/sections/:sectionID">
            <SectionPage userState= {userState}/>
            </Route>
          </div>
        </Router>
      </div>
      </div>
      </div>
    );

}

export default App;
