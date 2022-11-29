// Note: App component...!

import React from 'react';
import Home from './components/home/home';
import { store } from './redux/store/store';
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;