import React from 'react';
import PropTypes from 'prop-types';
// REDUX
import { connect } from 'react-redux';
import { getLoaderState } from '../redux/selectors';
// STYLES
import "./Loader.css";

const Loader = ({loader})=>(
  <div className={loader ? "Loader" : ""}></div>
);

Loader.propTypes = {
  loader: PropTypes.bool.isRequired
};

export default connect(
  state=>({...getLoaderState(state)})
)(Loader);