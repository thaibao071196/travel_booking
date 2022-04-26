import HomePage from '../HomePage';
import AboutPage from '../AboutPage';

import r from './routes';

export default [
  {
    path: r.HOME,
    element: HomePage,
  },
  {
    path: r.ABOUT,
    element: AboutPage,
  },
];
