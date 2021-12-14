import {
  Checkbox,

  Paper,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../../Reusable/RuseForm/Controls/Controls";
import useStyles from "./StyleFromCreatUser";
import initialFValues from "../../../Services/userServices";
import { useForm } from "../../Reusable/RuseForm/UseForm";
import { useDispatch } from 'react-redux';

function FormCreateUsers() {
  const classes = useStyles();
  const { values, errors, setErrors, handleInputChange, resetForm ,onSubmit} =
    useForm(initialFValues, true);
    const dispatch = useDispatch();

  const [showSecAdress, setShowSecAdress] = useState(false);
  const [showThirdAdress, setShowThirdAdress] = useState(false);
  const [showPrenom, setshowPrenom] = useState(false);
  const [showNationality, setshowNationality] = useState(false);
  const [step, setStep] = useState(false);

 


  const handelshowSecAdress = () => {
    setShowSecAdress(!showSecAdress);
  };
  const handelshowThirdAdress = () => {
    setShowThirdAdress(!showThirdAdress);
  };
  const handelshowPrenom = () => {
    setshowPrenom(!showPrenom);
  };
  const handelshowNationality = () => {
    setshowNationality(!showNationality);
  };
  const handelNext = () => {
    setStep(true);
  };

  const handelReturn = ()=>{
    setStep(false);

  }
  return (
    <Paper>
      {!step && (
        <>
          <Paper className={classes.InformationUser}>
            <Paper className={classes.Box}>
              <Paper className={classes.TriRowLeft}>
                <Controls.Input
                  label={"Nom*"}
                  value={values.firstname}
                  onChange={handleInputChange}
                  name="firstname"
                />
                <Controls.Input
                  label={"Prénom*"}
                  value={values.lastname}
                  onChange={handleInputChange}
                  name="lastname"
                />

                {showPrenom && (
                  <Controls.Input
                    label={"deuxième prénom"}
                    value={values.middleNames}
                    onChange={handleInputChange}
                    name="middleNames"
                  />
                )}
              </Paper>
              <div className={classes.row}>
                <text className={classes.TextCheck}>
                  ajouter deuxième prénom
                </text>
                <Checkbox
                  checked={showPrenom}
                  onChange={handelshowPrenom}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <Paper className={classes.TriRowLeft}>
                <Controls.DatePicker
                  label={"date de naissance*"}
                  value={values.birthday}
                  onChange={handleInputChange}
                  name="birthday"
                />
                <Controls.Input
                  label={"placeOfBirth*"}
                  value={values.placeOfBirth}
                  onChange={handleInputChange}
                  name="placeOfBirth"
                />

                <Controls.Input
                  label={"birthCountry"}
                  value={values.birthCountry}
                  onChange={handleInputChange}
                  name="birthCountry"
                />
              </Paper>

              <Controls.Input
                label={"address1*"}
                value={values.address1}
                onChange={handleInputChange}
                name="address1"
              />
              <div className={classes.row}>
                <text className={classes.TextCheck}>ajouter autre address</text>
                <Checkbox
                  checked={showSecAdress}
                  onChange={handelshowSecAdress}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>

              {showSecAdress && (
                <Controls.Input
                  label={"address2"}
                  value={values.address2}
                  onChange={handleInputChange}
                  name="address2"
                />
              )}
              {showSecAdress && (
                <div className={classes.row}>
                  <text className={classes.TextCheck}>
                    ajouter autre address
                  </text>
                  <Checkbox
                    checked={showThirdAdress}
                    onChange={handelshowThirdAdress}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              )}
              {showThirdAdress && (
                <Controls.Input
                  label={"address3"}
                  value={values.address3}
                  onChange={handleInputChange}
                  name="address3"
                />
              )}
            </Paper>

            <Paper className={classes.TriRowRight}>
              <div className={classes.row}>
                <Controls.Input
                  label={"nationality*"}
                  value={values.nationality}
                  onChange={handleInputChange}
                  name="nationality"
                />
                {showNationality && (
                  <Controls.Input
                    label={"nationalityOther"}
                    value={values.nationalityOther}
                    onChange={handleInputChange}
                    name="nationalityOther"
                  />
                )}
              </div>

              <div className={classes.row}>
                <text className={classes.TextCheck}>
                  ajouter autre nationality
                </text>
                <Checkbox
                  checked={showNationality}
                  onChange={handelshowNationality}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>

              <Controls.Input
                label={"country*"}
                value={values.country}
                onChange={handleInputChange}
                name="country"
              />

              <Controls.Input
                label={"state"}
                value={values.state}
                onChange={handleInputChange}
                name="state"
              />
              <Controls.Input
                label={"city*"}
                value={values.city}
                onChange={handleInputChange}
                name="city"
              />

              <Controls.Input
                label={"postcode*"}
                value={values.postcode}
                onChange={handleInputChange}
                name="postcode"
              />
            </Paper>
          </Paper>

          <Paper className={classes.InformationUser}>
            <Paper className={classes.LeftInfoUSer}>
              <Controls.Input
                label={"Titre*"}
                value={values.title}
                onChange={handleInputChange}
                name="title"
              />
              <Controls.Input
                label={"userTypeId* "}
                value={values.userTypeId}
                onChange={handleInputChange}
                name="userTypeId "
              />{" "}
              <Controls.Input
                label={"specifiedUSPerson * "}
                value={values.specifiedUSPerson}
                onChange={handleInputChange}
                name="specifiedUSPerson"
              />
              <Controls.Input
                label={"Tranche de revenu du client *"}
                value={values.incomeRange}
                onChange={handleInputChange}
                name="incomeRange "
              />
            </Paper>
            <Paper className={classes.RightInfoUSer}>
              <Paper className={classes.TriRow}>
                <Controls.Input
                  label={"email*"}
                  value={values.email}
                  onChange={handleInputChange}
                  name="email"
                />
                <Controls.Input
                  label={"password*"}
                  value={values.password}
                  onChange={handleInputChange}
                  name="password"
                />
              </Paper>
              <Paper className={classes.TriRow}>
                <Controls.Input
                  label={"phone*"}
                  value={values.phone}
                  onChange={handleInputChange}
                  name="phone"
                />

                <Controls.Input
                  label={"mobile*"}
                  value={values.mobile}
                  onChange={handleInputChange}
                  name="mobile"
                />
              </Paper>
              <Paper className={classes.TriRow}>
                <Controls.Input
                  label={"countryName *"}
                  value={values.countryName}
                  onChange={handleInputChange}
                  name="countryName "
                />
              </Paper>
            </Paper>
          </Paper>
        </>
      )}

      {step && (
        <Paper className={classes.InformationUserSec}>
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
            <Controls.Input
              label={"occupation"}
              value={values.occupation}
              onChange={handleInputChange}
              name="occupation"
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
      )}
      <div className={classes.boxBtn}>
        {!step ? (
          <Button
            variant="contained"
            className={classes.btn}
            onClick={handelNext}
          >
            Suivant
          </Button>
        ) : (
          <Button
            variant="contained"
            className={classes.btnR}
            onClick={handelReturn}
          >
            Reteur
          </Button>
        )}
      {step &&   <Button
            variant="contained"
            className={classes.btn}
            onClick={onSubmit}
          >
            Suivant
          </Button>}
      </div>
    </Paper>
  );
}

export default FormCreateUsers;
