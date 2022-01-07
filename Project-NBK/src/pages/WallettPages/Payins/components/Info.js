/* eslint-disable */
/** @jsxImportSource theme-ui */
import useStyles from 'components/RightSideBares/UseVisualiser/stylesVisualiserPortefeuille';
import PaperContainer from 'components/Reusable/PapaerContainer/PaperContainer';
import TriPaperContainer from 'components/Reusable/PapaerContainer/TriPaperContainer';
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import UseHeaderInfo from 'components/Reusable/UseHeaderInfo/UseHeaderInfo';
import { useDispatch, useSelector } from 'react-redux';
import * as type from 'redux/types/payinsTypes';
import * as deleteDialogeType from 'redux/types/deleteDialogeTypes';

const Info = (props) => {
  const classes = useStyles();
  const [showCheck, setshowCheck] = useState(false);
  const { handelShowClose, titre } = props;
  const show = () => {
    setshowCheck(!showCheck);
  };
  const dispatch = useDispatch();
  const info = useSelector((state) => state.payins.info);
  const loading = useSelector((state) => state.payins.deleteLoading);
  const errors = useSelector((state) => state.payins.errors);
  const open = useSelector((state) => state.deleteDialoge.open);

  const handleDelete = async () => {
    console.log('deleted');
    dispatch({
      type: type.DELETE_PAYIN_REQUEST,
      payload: { id: info?.payinId },
    });
  };

  const handleClickOpen = () => {
    dispatch({ type: deleteDialogeType.OPEN_DELETE_DIALOGE });
  };

  const handleClose = async () => {
    dispatch({ type: type.RESET_PAYINS_ERRORS });
    dispatch({ type: deleteDialogeType.CLOSE_DELETE_DIALOGE });
  };

  return (
    <div className={classes.ContainerX1}>
      <UseHeaderInfo
        show={show}
        titre={titre}
        handelShowClose={handelShowClose}
        showCheck={showCheck}
        handleDelete={handleDelete}
        loading={loading}
        errors={errors}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Paper className={classes.Container}>
        <PaperContainer
          title={'Wallet ID :'}
          SbTitle={info.walletId}
          ScTitle={'User ID :'}
          ScSbTitle={info.userId}
        />
        <PaperContainer
          title={'Currency :'}
          SbTitle={info.currency}
          ScTitle={'Amount :'}
          ScSbTitle={info.amount}
        />

        <PaperContainer
          title={'Payment Method Id :'}
          SbTitle={info.paymentMethodId}
          ScTitle={'Created Date :'}
          ScSbTitle={info.createdDate}
        />
        <PaperContainer
          title={'Creditor Name :'}
          SbTitle={info.creditorName}
          ScTitle={'Iban Full Name :'}
          ScSbTitle={info.ibanFullname}
        />
      </Paper>
    </div>
  );
};

export default Info;
