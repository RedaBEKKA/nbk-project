import React, { useState } from "react";
import Navigation from "../components/Navigation";

const Beneficiaires = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <div className="App">
          <Navigation />
        </div>
        <div>Beneficiaires Test</div>
      </div>
    </div>
  );
};

export default Beneficiaires;
