import React from "react";
import { getUserData } from "../../../Services/UserService";
import Controls from "../RuseForm/Controls/Controls";

function InputFilterSelect() {
  return (
      <Controls.Select 
        options={getUserData()}
        label={'InputFilterSelect'}
        />
  );
}

export default InputFilterSelect;
