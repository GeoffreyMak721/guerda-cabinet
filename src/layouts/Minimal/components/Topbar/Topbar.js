import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Link } from "react-router-dom";

import logo from "images/logo-guerda.svg";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "none",
  },
}));

export const NavLink = tw(Link)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    width: 100%;
    max-width: 200px;
  }
`;

const Topbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <LogoLink to="/">
          <img src={logo} alt="logo" />
        </LogoLink>
        {/* <RouterLink to="/">
          {/* <img alt="Logo" src="/images/logos/logo--white.svg" /> 
          <Box color="common.white">
            <Typography color="inherit" variant="h4">
              Complexe Scolaire Rehoboth
            </Typography>
          </Box>
        </RouterLink> */}
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
