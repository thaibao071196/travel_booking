import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'adminPage';

function AdminPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  // const { t } = useTranslation();

  return (
    <div>
      <p>abc</p>
    </div>
  );
}

AdminPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(AdminPage);
