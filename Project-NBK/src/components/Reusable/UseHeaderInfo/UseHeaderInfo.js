import { Paper, CircularProgress } from '@material-ui/core';
import React from 'react';
import useStyles from './stylesHederInfo';
import CloseIcon from '@material-ui/icons/Close';
import { ArrowDownward, Brush, Chat, Delete, Flag, Print } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';

import CheckBoxStatus from '../../Reusable/CheckBOXStatus/CheckBoxStatus';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/payinsTypes';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UseHeaderInfo(props) {
  const classes = useStyles();

  const {
    show,
    titre,
    handelShowClose,
    showCheck,
    handleClose,
    loading,
    errors,
    handleClickOpen,
    open,
    handleDelete,
  } = props;
  console.log('loading', loading);

  return (
    <Paper className={classes.header}>
      <div className={classes.left}>
        <CloseIcon className={classes.iconHeader} onClick={handelShowClose} />
        <text className={classes.textTitle}>{titre}</text>
      </div>
      <div className={classes.right}>
        {showCheck && <CheckBoxStatus />}

        <Flag className={classes.icon} onClick={show} />

        <Chat className={classes.icon} />
        <Print className={classes.icon} />
        <ArrowDownward className={classes.icon} />
        <Brush className={classes.icon} />
        <div>
          <Delete className={classes.icon} onClick={handleClickOpen} />
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle
              style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)', color: 'white' }}
              id="alert-dialog-slide-title"
            >
              {'Êtes-vous sûr de bien vouloir supprimer cet élément?'}
            </DialogTitle>
            <DialogContent>
              {errors && errors.map((error) => <Alert severity="error">{error.message}</Alert>)}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: 'black' }}>
                NON
              </Button>
              <Button
                style={{ backgroundColor: 'black', color: 'white' }}
                onClick={handleDelete}
                variant="contained"
              >
                {loading && (
                  <CircularProgress
                    style={{ marginRight: 10 }}
                    color="white"
                    className={classes.circularProgress}
                    size={20}
                  />
                )}
                OUI
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </Paper>
  );
}

export default UseHeaderInfo;
