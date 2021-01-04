import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './views/Home'
import Search from './views/Search'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search-results" component={Search} />
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
