import React, { useEffect } from 'react';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { makeSelectStatusReducer, makeSelectStatusSaga } from './selectors';

import reducer from './reducer';
import saga from './saga';

import { testActions } from './actions';

const key = 'aboutPage';
function AboutPage({ statusReducer, statusSaga, dispatch }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const onTestReducerAction = () => {
    dispatch(testActions.successReducer({ status: 'test reducer success' }));
  };

  const onTestSagaAction = () => {
    dispatch(testActions.triggerToSaga({ status: 'test saga success' }));
  };

  return (
    <>
      <div onClick={onTestReducerAction}>
        {statusReducer === null
          ? 'Click to call action reducer'
          : statusReducer}
      </div>
      <div onClick={onTestSagaAction}>
        {statusSaga === null ? 'Click to call action saga' : statusSaga}
      </div>
    </>
  );
}

AboutPage.propTypes = {
  statusReducer: PropTypes.string,
  dispatch: PropTypes.func,
  statusSaga: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  statusReducer: makeSelectStatusReducer(),
  statusSaga: makeSelectStatusSaga(),
});

export default connect(mapStateToProps)(AboutPage);
