import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import reducer from './reducer';
import saga from './saga';

const key = 'registerPage';

function RegisterPage({ dispatch, setOpenForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  function handleCancel() {
    setOpenForm(false);
  }

  return (
    <div className="overlay fixed top-0 bottom-0 right-0 left-0 bg-opacity-40 bg-black z-10">
      <div className="mx-auto max-w-lg flex-col items-center justify-center pt-10 pb-10">
        <div className="relative my-10 z-10 bg-white rounded-md py-10 px-10 transition-transform">
          <div className="absolute right-10 top-5">
            <HighlightOffIcon
              className="text-3xl cursor-pointer"
              onClick={() => handleCancel()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setOpenForm: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(RegisterPage);
