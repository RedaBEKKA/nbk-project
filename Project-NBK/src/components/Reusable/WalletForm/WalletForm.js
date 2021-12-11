/* eslint-disable */

/** @jsxImportSource theme-ui */

import useStyles from "./styleWalletForm";
import { Paper, Button, TextareaAutosize } from "@material-ui/core";
import { useForm, Form } from "../../Reusable/RuseForm/UseForm";
import Controls from "../../Reusable/RuseForm/Controls/Controls";
import initialFValues from "../../../Services/walletService";
import { WalletTypeId } from "../../../Services/walletTypeId";
import { AccurencyWallet } from "../../../Services/AccurencyWallet";
import UseHeaderCreate from "../UseHeaderCreate/UseHeaderCreate";
import { SpaceBar, SpaceBarOutlined } from "@material-ui/icons";
import { Textarea } from "@theme-ui/components";

function WalletForm({ handelClose }) {
  const classes = useStyles();
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true);

  return (
    <Paper className={classes.PaperContainer}>
      <UseHeaderCreate
          titre={"Ajouter un Portefeuille"}
          handelShowClose={handelClose}
        />
      <Paper className={classes.BoxOne} elevation={0}>
        <Form className={classes.Form}>
          <Paper className={classes.boxContainer} elevation={0}>
            <div className={classes.RowPaper}>
              <Controls.Input
                id="classe portefeuille"
                label="Classe portefeuille"
                value={values.walletTag}
                onChange={handleInputChange}
                name="walletTag"
              />
              <SpaceBar className={classes.icon} />

              <Controls.Input
                id="l'événement"
                label="Nom de l'événement"
                value={values.eventName}
                onChange={handleInputChange}
                name="eventName"
              />
            </div>
            <div className={classes.RowPaper}>
              <Controls.Select
                id="Type de portefeuille"
                label="Type de portefeuille"
                value={values.walletTypeId}
                onChange={handleInputChange}
                name="walletTypeId"
                options={WalletTypeId()}
              />
              <SpaceBar className={classes.icon} />

              <Controls.Select
                id="devise"
                label="Devise"
                value={values.currency}
                onChange={handleInputChange}
                name="devise"
                variant="outlined"
                options={AccurencyWallet()}
              />
            </div>
          </Paper>
          <Paper className={classes.RowPaper} elevation={0}>
            <Controls.DatePicker
              id="date"
              label="date de l'événement"
              value={values.eventDate}
              onChange={handleInputChange}
              name="eventDate"
            />
          </Paper>
          <Paper className={classes.ColumnPaper} elevation={0}>
            <div className={classes.RowPaper}>
              <Controls.DatePicker
                id="paiement"
                label="Date début de paiement"
                value={values.eventPayinStartDate}
                onChange={handleInputChange}
                name="eventPayinStartDate"
              />
              <SpaceBar className={classes.icon} />

              <Controls.DatePicker
                id="paiement"
                label="Date de fin de paiement"
                value={values.eventPayinEndDate}
                onChange={handleInputChange}
                name="eventPayinEndDate"
                variant="outlined"
              />
            </div>
            <Controls.TextArea
              placeholder="Taper votre message ici ..."
              id="Message"
              aria-label="Message"
              value={values.eventMessage}
              onChange={handleInputChange}
              name="eventMessage"
            />
          </Paper>
        </Form>
      </Paper>

      <Paper className={classes.footer}>
        <Button variant="outlined">Annuler</Button>
        <Button variant="contained" sx={{ bg: "btnBackground" }}>
          {" "}
          Confirmer
        </Button>
      </Paper>
    </Paper>
  );
}

export default WalletForm;
