import React from 'react';
import './App.css';
import Layout from './Pages/Layout'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import EmpList from './Pages/empList'
import Home from "./Pages/Home"
import Description from "./Pages/Description"


function Router() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Layout>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/employee" component={EmpList} />
        <Route path="/employee/:id" component={Description}/>
        </Switch>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default Router;
