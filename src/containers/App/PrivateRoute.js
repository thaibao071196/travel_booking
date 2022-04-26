import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const isAccept = false;
  return isAccept ? children : <Navigate to="/" />;
}

PrivateRoute.propTypes = {
  children: PropTypes.element,
};

export default PrivateRoute;
