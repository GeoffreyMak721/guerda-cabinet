import React from "react";
import { Route } from "react-router-dom";
import AuthRoute from "helpers/AuthRoute";
import PropTypes from "prop-types";

const RouteWithLayout = (props) => {
  const { layout: Layout, auth, component: Component, ...rest } = props;
  const RouteComponent = auth ? AuthRoute : Route;
  return (
    <RouteComponent {...rest}>
      <Layout>
        <Component />
      </Layout>
    </RouteComponent>
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
