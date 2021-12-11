/* eslint-disable */
/** @jsxImportSource theme-ui */
import useStyles from "./stylesVisualiserPortefeuille";
import PaperContainer from "../../Reusable/PapaerContainer/PaperContainer";
import TriPaperContainer from "../../Reusable/PapaerContainer/TriPaperContainer";
import { useState } from "react";
import { Paper } from "@material-ui/core";
import UseHeaderInfo from "../../Reusable/UseHeaderInfo/UseHeaderInfo";

const Visualiser = (props) => {
  const classes = useStyles();
  const [showCheck, setshowCheck] = useState(false);
  const { handelShowClose, titre } = props;
  const show = () => {
    setshowCheck(!showCheck);
  };
  return (
    <div className={classes.ContainerX1}>
      <UseHeaderInfo show={show} titre={titre} handelShowClose={handelShowClose} showCheck={showCheck}/>
        <Paper className={classes.Container}>
        <PaperContainer
          title={"Nom :"}
          SbTitle={"Amariche"}
          ScTitle={"Prénom :"}
          ScSbTitle={"Amariche"}
        />

        <PaperContainer
          title={"Date de naissance :"}
          SbTitle={"08/07/1996"}
          ScTitle={"Lieu de naissance :"}
          ScSbTitle={"Alger"}
        />

        <PaperContainer
          title={"Status :"}
          SbTitle={"En attente"}
          ScTitle={"IBAN : "}
          ScSbTitle={"FR1420041010050500013M02606"}
        />

        <PaperContainer
          title={"Mobile :"}
          SbTitle={"0773 82 06 33"}
          ScTitle={"Fix :"}
          ScSbTitle={"0221 40 25 63"}
        />
      </Paper>
      <TriPaperContainer
        titleA={"Pays :"}
        SbTitleA={"Algerie"}
        titleB={"Ville :"}
        SbTitleB={"Khemis miliana"}
        titleC={"Code Zip :"}
        SbTitleC={"44013"}
      />
    </div>
  );
};

export default Visualiser;
