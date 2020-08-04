import React from "react";
import PropTypes from "prop-types";

import useJsonFetch from "../hooks/useJsonFetch";

const Fetch = (props) => {
  const [data, loading, error] = useJsonFetch(props.url);
  console.log(props.url, data, loading, error);

  return (
    <div>
      <p>URL: {props.url}</p>
      <p>DATA: {data}</p>
      <p>ERROR: {error}</p>
      <p>LOADING: {loading ? "true" : "false"}</p>
    </div>
  );
};

Fetch.propTypes = {
  url: PropTypes.string,
};

export default Fetch;
