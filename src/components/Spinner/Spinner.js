import React, { Fragment } from 'react';
import SpinnerGif from '../../assets/spinner.gif';

import styles from './Spinner.module.css';

const Spinner = () => (
  <Fragment>
    <img src={SpinnerGif} alt='loading...' className={styles.spinner} />
  </Fragment>
);

export default Spinner;