import React from 'react';
import { Router } from '@reach/router';

import LandingPage from '../pages/landing';

const AppRouter = () => (
  <Router>
    <LandingPage path="/" />
  </Router>
);

export default AppRouter;
