// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/products" component={ProductsPage} />
          <Route path="/" exact>
            <h1 className="text-center text-4xl mt-10">Welcome to Stitch Up Dreams</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
