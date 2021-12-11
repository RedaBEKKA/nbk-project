import { Paper } from "@material-ui/core";
import React from "react";
import Controls from "../../Reusable/RuseForm/Controls/Controls";
import useStyles from "./StyleFromCreatUser";
import initialFValues from "../../../Services/userServices";
import { useForm } from "../../Reusable/RuseForm/UseForm";

function FormCreateUsers() {
  const classes = useStyles();
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true);
  return (
    <Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"Nom"}
          value={values.firstname}
          onChange={handleInputChange}
          name="firstname"
        />
        <Controls.Input
          label={"Prénom"}
          value={values.lastname}
          onChange={handleInputChange}
          name="lastname"
        />
        <Controls.Input
          label={"deuxième prénom"}
          value={values.middleNames}
          onChange={handleInputChange}
          name="middleNames"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"address1"}
          value={values.address1}
          onChange={handleInputChange}
          name="address1"
        />
        <Controls.Input
          label={"address2"}
          value={values.address2}
          onChange={handleInputChange}
          name="address2"
        />

        <Controls.Input
          label={"address3"}
          value={values.address3}
          onChange={handleInputChange}
          name="address3"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.DatePicker
          label={"date de naissance"}
          value={values.birthday}
          onChange={handleInputChange}
          name="birthday"
        />
        <Controls.Input
          label={"email"}
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />

        <Controls.Input
          label={"country"}
          value={values.country}
          onChange={handleInputChange}
          name="country"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"city"}
          value={values.city}
          onChange={handleInputChange}
          name="city"
        />

        <Controls.Input
          label={"state"}
          value={values.state}
          onChange={handleInputChange}
          name="state"
        />
        <Controls.Input
          label={"nationality"}
          value={values.nationality}
          onChange={handleInputChange}
          name="nationality"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"phone"}
          value={values.phone}
          onChange={handleInputChange}
          name="phone"
        />

        <Controls.Input
          label={"mobile"}
          value={values.mobile}
          onChange={handleInputChange}
          name="mobile"
        />

        <Controls.Input
          label={"password"}
          value={values.password}
          onChange={handleInputChange}
          name="password"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"Titre"}
          value={values.title}
          onChange={handleInputChange}
          name="title"
        />

        <Controls.Input
          label={"placeOfBirth"}
          value={values.placeOfBirth}
          onChange={handleInputChange}
          name="placeOfBirth"
        />
        <Controls.Input
          label={"nationalityOther"}
          value={values.nationalityOther}
          onChange={handleInputChange}
          name="nationalityOther"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"postcode"}
          value={values.postcode}
          onChange={handleInputChange}
          name="postcode"
        />

        <Controls.Input
          label={"birthCountry"}
          value={values.birthCountry}
          onChange={handleInputChange}
          name="birthCountry"
        />
        <Controls.Input
          label={"occupation"}
          value={values.occupation}
          onChange={handleInputChange}
          name="occupation"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"incomeRange"}
          value={values.incomeRange}
          onChange={handleInputChange}
          name="incomeRange"
        />
        <Controls.Input
          label={"legalName"}
          value={values.legalName}
          onChange={handleInputChange}
          name="legalName"
        />
        <Controls.Input
          label={"legalRegistrationNumber"}
          value={values.legalRegistrationNumber}
          onChange={handleInputChange}
          name="legalRegistrationNumber"
        />
        {/* 
      
       
      */}
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"legalTvaNumber"}
          value={values.legalTvaNumber}
          onChange={handleInputChange}
          name="legalTvaNumber"
        />
        <Controls.Input
          label={"colegalRegistrationDateuntry"}
          value={values.colegalRegistrationDateuntry}
          onChange={handleInputChange}
          name="colegalRegistrationDateuntry"
        />
        <Controls.Input
          label={"legalForm"}
          value={values.legalForm}
          onChange={handleInputChange}
          name="legalForm"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"taxNumber"}
          value={values.taxNumber}
          onChange={handleInputChange}
          name="taxNumber"
        />
        <Controls.Input
          label={"taxResidence"}
          value={values.taxResidence}
          onChange={handleInputChange}
          name="taxResidence"
        />
        <Controls.Input
          label={"activityOutsideEu"}
          value={values.activityOutsideEu}
          onChange={handleInputChange}
          name="activityOutsideEu"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"legalNumberOfEmployeeRange"}
          value={values.legalNumberOfEmployeeRange}
          onChange={handleInputChange}
          name="legalNumberOfEmployeeRange"
        />
        <Controls.Input
          label={"effectiveBeneficiary"}
          value={values.effectiveBeneficiary}
          onChange={handleInputChange}
          name="effectiveBeneficiary"
        />
        <Controls.Input
          label={"language"}
          value={values.language}
          onChange={handleInputChange}
          name="language"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"legalShareCapital"}
          value={values.legalShareCapital}
          onChange={handleInputChange}
          name="legalShareCapital"
        />
        <Controls.Input
          label={"legalSector"}
          value={values.legalSector}
          onChange={handleInputChange}
          name="legalSector"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"involvedSanctions"}
          value={values.involvedSanctions}
          onChange={handleInputChange}
          name="involvedSanctions"
        />
        <Controls.Input
          label={"timezone"}
          value={values.timezone}
          onChange={handleInputChange}
          name="timezone"
        />
      </Paper>
      <Paper className={classes.TriRow}>
        <Controls.Input
          label={"position"}
          value={values.position}
          onChange={handleInputChange}
          name="position"
        />
        <Controls.Input
          label={"economicSanctions"}
          value={values.economicSanctions}
          onChange={handleInputChange}
          name="economicSanctions"
        />
        <Controls.Input
          label={"residentCountriesSanctions"}
          value={values.residentCountriesSanctions}
          onChange={handleInputChange}
          name="residentCountriesSanctions"
        />
      </Paper>
    </Paper>
  );
}

export default FormCreateUsers;
