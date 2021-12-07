import { Grid, Paper } from "@material-ui/core";
import React from "react";
import UserFom from "../components/UserForm/UserFom";
import  useStyles from "./styles/CreateUserStyle"
function CreateNewUser() {
    const classes = useStyles()
  return (
    <Grid>
      <Paper >
        <UserFom/>
      </Paper>
    </Grid>
  );
}

export default CreateNewUser;
