import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Backdrop from './components/Backdrop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound'
import Login from './pages/Login';
import Footer from './components/Footer';
import {Switch,Route} from 'react-router-dom';
import Details from './components/Details';

export default class App extends Component {
  state={
    isOpen:false,
    islogged:false
  };
  constructor(props){
    super(props);
    this.sideHandle=this.sideHandle.bind(this);
    this.sideWithdraw=this.sideWithdraw.bind(this);
  }
  sideHandle=()=>{
    this.setState((prevState)=>{
      return{ isOpen : !prevState.isOpen};
    });
  };
  sideWithdraw=()=>{
    this.setState({isOpen:false});
  };
  login=()=>{
    this.setState((prevState)=>{
      return{ islogged : !prevState.islogged};
    });
  }

  render() {
    const isOpen=this.state.isOpen;
    let appear;
    let disappear;
    if(isOpen){
      disappear=<Backdrop click={this.sideWithdraw}/>
    }
    return (
      <>
        <Navbar click={this.sideHandle} log={this.login}/>
        <Sidebar show={this.state.isOpen} sign={this.login} Login={this.state.islogged} name="Ria" guest="Guest" in="Sign In" out="Sign Out" />
        {disappear}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/details" component={Details} />
          <Route component={NotFound} />
        </Switch>
        <br />
        <Footer />
      </>
    );
  }
}


