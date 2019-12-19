import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Latest from './pages/latest.js';
import Gallery from './pages/gallery.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
      <Switch>
          <Route exact path= '/'  component={Home} />
          <Route exact path= '/pages/contact'  component={Contact} />
          <Route exact path= '/pages/gallery'  component={Gallery} />
          <Route exact path= '/pages/latest'  component={Latest} />
        </Switch>
        <Footer />
      </div> 
    </div>
  );
}

export default App;