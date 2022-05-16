import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal';
import FormHandle from './FormHandle';

import { loginActions } from './actions';

import reducer from './reducer';
import saga from './saga';

const key = 'loginPage';

function LoginPage({ dispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);

  const handleLogin = (value) => {
    dispatch(loginActions.trigger({ value }));
    console.log(value);
  };

  const handleRegister = (value) => {
    console.log(value);
  };

  const handleDisplayRegisterForm = (value) => {
    setIsOpenRegisterForm(value);
  };

  return (
    <div className="login-page <lg:px-2">
      <Modal
        headerText="Register"
        headerPosition="center"
        isVisible={isOpenRegisterForm}
        onBackdropClick={() => handleDisplayRegisterForm(false)}
        onClickClose={() => handleDisplayRegisterForm(false)}
        size="sm"
        position="top"
        containerClass="bg-white rounded-b-lg"
      >
        <FormHandle
          handleSubmitForm={handleRegister}
          text="Register"
          isAbsolute={false}
          isRegister
        />
      </Modal>
      <FormHandle
        handleSubmitForm={handleLogin}
        handleDisplayRegisterForm={handleDisplayRegisterForm}
        isRegister={false}
        text="Sign in"
      />
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(LoginPage);
