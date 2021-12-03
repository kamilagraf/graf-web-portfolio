import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Grid, Div1 } from './Roots.styles';
import Header from 'components/atoms/Header/Header';

const Root = () => {
  return (
    <Wrapper>
      <Grid>
        <Header />
      </Grid>
    </Wrapper>
  );
};

Root.propTypes = {};

export default Root;
