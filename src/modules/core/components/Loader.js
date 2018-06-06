import React from 'react';
// REDUX
import { connect } from 'react-redux';
import { getLoaderState } from '../redux/selectors';
// STYLES
import "./Loader.css";

const Loader = ({show})=>(
  <div className={!show ? "Loader" : ""}></div>
);

export default connect(
  state=>({show: getLoaderState(state)})
)(Loader);