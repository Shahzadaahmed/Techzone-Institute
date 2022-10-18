// Note: AppRotes component...!

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Note: Importing reuseable components...!
import Navigation from './components/navigation/navigation';
import SignUpScreen from './components/sign-up/signup';
import LogInScreen from './components/log-in/login';

const AppRoutes = () => {
  return (
    <>
      <Router>
      <Navigation />

        <Routes>
          <Route path='/' element={<LogInScreen />} />
          <Route path='sign-up-screen' element={<SignUpScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;