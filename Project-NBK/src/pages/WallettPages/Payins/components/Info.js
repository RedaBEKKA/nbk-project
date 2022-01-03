/* eslint-disable */
/** @jsxImportSource theme-ui */
import useStyles from 'components/RightSideBares/UseVisualiser/stylesVisualiserPortefeuille';
import PaperContainer from 'components/Reusable/PapaerContainer/PaperContainer';
import TriPaperContainer from 'components/Reusable/PapaerContainer/TriPaperContainer';
import { useState } from 'react';
import { Paper } from '@material-ui/core';
import UseHeaderInfo from 'components/Reusable/UseHeaderInfo/UseHeaderInfo';
import { useSelector } from 'react-redux';

const Info = (props) => {
  const classes = useStyles();
  const [showCheck, setshowCheck] = useState(false);
  const { handelShowClose, titre } = props;
  const show = () => {
    setshowCheck(!showCheck);
  };
  const info = useSelector((state) => state.cartes.info);
  return (
    <div className={classes.ContainerX1}>
      <UseHeaderInfo
        show={show}
        titre={titre}
        handelShowClose={handelShowClose}
        showCheck={showCheck}
      />
      <Paper className={classes.Container}>
        <PaperContainer
          title={'Cart ID :'}
          SbTitle={info.cardId}
          ScTitle={'User ID :'}
          ScSbTitle={info.userId}
        />
        <PaperContainer
          title={'Start Date :'}
          SbTitle={info.startDate}
          ScTitle={'End Date :'}
          ScSbTitle={info.endDate}
        />
        <PaperContainer
          title={'Delivery Title :'}
          SbTitle={info.deliveryTitle}
          ScTitle={'Delivery Country :'}
          ScSbTitle={info.deliveryCountry}
        />
        <PaperContainer
          title={'Masked Pan :'}
          SbTitle={info.maskedPan}
          ScTitle={'Perms Group :'}
          ScSbTitle={info.permsGroup}
        />
      </Paper>
    </div>
  );
};

export default Info;
