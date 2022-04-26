import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import routesMap from './routesMap';

function App() {
  return (
    <Router>
      <Routes>
        {routesMap.map((route) => {
          const Element = route.element;
          const { isPrivate } = route;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                !isPrivate ? (
                  <Element />
                ) : (
                  <PrivateRoute>
                    <Element />
                  </PrivateRoute>
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

App.propTypes = {};

export default App;
