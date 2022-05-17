import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import classNames from 'classnames';

function Modal(props) {
  const {
    children,
    isVisible,
    onBackdropClick,
    size,
    position,
    headerText,
    onClickClose,
    containerClass,
    headerPosition,
    HeaderSub,
    Header,
  } = props;

  useEffect(
    () => () => {
      onBackdropClick();
    },
    [],
  );

  return (
    isVisible && (
      <>
        <div
          className={classNames(
            'fixed left-0 right-0 mx-auto my-auto h-auto max-h-95vh rounded z-1000 max-w-11/12 flex flex-col shadow',
            {
              'w-110': size === 'sm',
              'w-160': size === 'lg',
              'top-5': position === 'top',
              'top-5 sm:top-1/4': position === 'center',
            },
          )}
        >
          {headerText ? (
            <div
              className={classNames(
                'px-4 py-3 border-b border-gray-500 bg-white rounded-t-lg',
                {
                  'text-center': headerPosition === 'center',
                },
              )}
            >
              <h5 className="text-2xl font-bold">{headerText}</h5>
              {HeaderSub}
            </div>
          ) : (
            <></>
          )}
          {Header}
          <div
            className={classNames(
              'px-4 py-4 overflow-x-hidden overflow-y-auto primary-scrollbar flex-1',
              containerClass,
            )}
          >
            {children}
          </div>
          <button
            type="button"
            className="w-7 h-7 rounded-full border-none shadow-none absolute right-3 top-2.5 flex items-center justify-center cursor-pointer transition hover:bg-gray-200 focus:outline-none"
            onClick={onClickClose}
          >
            <IoMdCloseCircleOutline className="w-7 h-7 " />
          </button>
        </div>
        <div
          className="fixed left-0 top-0 w-full h-screen z-10 bg-black bg-opacity-50"
          onClick={onBackdropClick}
        />
      </>
    )
  );
}

Modal.defaultProps = {
  size: 'md',
  position: 'center',
  headerPosition: 'left',
  headerText: null,
  onBackdropClick: () => {},
  containerClass: '',
  HeaderSub: <></>,
  Header: <></>,
};

Modal.propTypes = {
  children: PropTypes.any,
  // disableClickOutsideBackdrop: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  position: PropTypes.oneOf(['top', 'center', 'bottom']),
  headerText: PropTypes.string,
  headerPosition: PropTypes.oneOf(['left', 'center']),
  HeaderSub: PropTypes.any,
  Header: PropTypes.any,
  onBackdropClick: PropTypes.func,
  onClickClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  containerClass: PropTypes.string,
};

export default Modal;
