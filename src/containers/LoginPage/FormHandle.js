import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { BsEyeSlashFill, BsEye } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

import classNames from 'classnames';
import { schema } from '../../utils/login';

function FormHandle({
  handleSubmitForm,
  isRegister,
  text,
  handleDisplayRegisterForm,
  isAbsolute,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [passwordShow, setPassWordShow] = useState(false);

  const handleToggleDisplayPassword = () => {
    setPassWordShow(!passwordShow);
  };

  const onSubmitForm = (value) => {
    handleSubmitForm(value);
    reset();
  };

  return (
    <div
      className={classNames({
        'absolute mx-auto items-center justify-center w-110 min-h-110  max-w-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2':
          isAbsolute,
      })}
    >
      <form
        className={classNames('w-full h-full bg-white p-4', {
          'form-signIn  bg-opacity-80': !isRegister,
        })}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        {!isRegister && (
          <div className="font-bold text-center flex justify-center text-2xl">
            SIGN IN
          </div>
        )}

        <div className="relative">
          {isRegister && (
            <>
              <div className="pl-3 pb-2">
                <div>* User Name:</div>
              </div>
              <div className="shadow-xl w-full rounded-lg h-12 border border-blue-gray-200 relative overflow-hidden">
                <input
                  id="username"
                  className="bg-white outline-none border-none w-full h-full pl-5"
                  type="text"
                  name="username"
                  placeholder="Enter your name..."
                  {...register('username')}
                />
              </div>
              <span className="text-red-500/100 ml-3">
                {errors.username && errors.username.message}
              </span>
            </>
          )}

          <div className="mt-4 pl-3 pb-2">
            <div>* Email:</div>
          </div>
          <div className="shadow-xl w-full rounded-lg h-12 border border-blue-gray-200 relative overflow-hidden">
            <input
              id="email"
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

          <div className="mt-4 pl-3 pb-2">
            <div>* Password:</div>
          </div>
          <div className="shadow-xl w-full rounded-lg h-12 border border-blue-gray-200 relative overflow-hidden">
            <div
              onClick={handleToggleDisplayPassword}
              className="absolute cursor-pointer none-select right-0 h-full w-16 bg-blue-gray-200 flex items-center justify-center"
            >
              <div className="text-gray-500 text-2xl">
                {!passwordShow ? <BsEyeSlashFill /> : <BsEye />}
              </div>
            </div>
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

          {!isRegister && (
            <div className="text-right text-primary">
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleDisplayRegisterForm(true)}
              >
                Create an account ?
              </button>
            </div>
          )}

          <div className="text-right">
            <button
              type="submit"
              className={classNames(
                'text-white rounded-lg w-28 mt-7 h-10 overflow-hidden hover:bg-opacity-90',
                {
                  'bg-primary': !isRegister,
                  'bg-success': isRegister,
                },
              )}
            >
              {text || 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

FormHandle.defaultProps = {
  isAbsolute: true,
};

FormHandle.propTypes = {
  handleSubmitForm: PropTypes.func,
  handleDisplayRegisterForm: PropTypes.func,
  isRegister: PropTypes.bool,
  text: PropTypes.string,
  isAbsolute: PropTypes.bool,
};

export default FormHandle;
