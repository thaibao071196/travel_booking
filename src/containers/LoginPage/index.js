/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import * as yup from 'yup';
import '../../styles/style.css';

import { loginActions } from './actions';

import reducer from './reducer';
import saga from './saga';

const key = 'loginPage';

const schema = yup.object().shape({
  email: yup.string().email().required('Please enter your email !'),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required('Please enter your password !')
    .matches(
      '(?=.*[0-9])(?=.*?[A-Z])',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case CharacterPassword should include at least one uppercase, one numeric value !',
    ),
});

function LoginPage({ dispatch }) {
  const [passwordShow, setPassWordShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // const { t } = useTranslation();

  function handleOpenRegister() {
    // setOpenForm(true);
  }

  function handleLogin(value) {
    dispatch(loginActions.trigger({ value }));
    reset();
  }

  function handlePasswordInvisible() {
    setPassWordShow(true);
  }

  function handlePasswordShow() {
    setPassWordShow(false);
  }

  return (
    <div className="login-page">
      <div className="absolute mx-auto items-center justify-center h-4/6 w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form
          className="form-signIn w-full h-full bg-white bg-opacity-80"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="font-bold text-center flex justify-center text-2xl pt-3">
            SIGN IN
          </div>
          <div className="relative my-10 mx-12">
            <div className="pl-3 pb-5">
              <label>* Email:</label>
            </div>
            <div className="shadow-xl w-full rounded-lg h-14 border border-blue-gray-200 relative overflow-hidden">
              <input
                className="bg-white outline-none border-none w-full h-full pl-5"
                type="email"
                name="email"
                placeholder="Enter email..."
                {...register('email')}
              />
            </div>

            <span className="text-red-500/100 ml-3">
              {errors.email && errors.email.message}
            </span>

            <div className="pt-5 pl-3 pb-5">
              <label>* Password:</label>
            </div>
            <div className="shadow-xl w-full rounded-lg h-14 border border-blue-gray-200 relative overflow-hidden">
              {!passwordShow ? (
                <div
                  onClick={handlePasswordInvisible}
                  className="absolute cursor-pointer right-0 h-full w-16 bg-blue-gray-200 flex items-center justify-center"
                >
                  <VisibilityOffIcon className="text-gray-500 w-8 h-8" />
                </div>
              ) : (
                <div
                  onClick={handlePasswordShow}
                  className="absolute cursor-pointer right-0 h-full w-16 bg-blue-gray-200 flex items-center justify-center"
                >
                  <VisibilityIcon className="text-gray-500 w-8 h-8" />
                </div>
              )}
              <input
                className="bg-white outline-none border-none w-full h-full pl-5"
                name="password"
                type={passwordShow ? 'text' : 'password'}
                placeholder="Enter password..."
                {...register('password')}
              />
            </div>

            <span className="text-red-500/100 ml-3">
              {errors.password && errors.password.message}
            </span>

            <div className="text-right text-primary pt-5">
              <a className="cursor-pointer" onClick={handleOpenRegister}>
                Create an account ?
              </a>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="text-white bg-red-500/50 shadow-xl w-full rounded-lg w-40 border-blue-gray-200 border mt-7 h-14 overflow-hidden"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(LoginPage);
