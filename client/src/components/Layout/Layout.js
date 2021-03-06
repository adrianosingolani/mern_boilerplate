import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CustomAlert from '../CustomAlert/CustomAlert';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header />
      <CustomAlert />
      <Box className={ classes.box }>
        { children }
      </Box>
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
