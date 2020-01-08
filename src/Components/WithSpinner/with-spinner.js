import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
// import './with-spinner.styles.scss';
import "./center.css";

const LoadingBar = () => {
  return (
    <div>
      <CircularProgress className="center" />
    </div>
  );
};

export default LoadingBar;
