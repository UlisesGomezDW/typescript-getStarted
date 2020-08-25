import React, { useState, useContext } from "react";
import { Context } from "./../../store";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const Form = (props: any) => {
  const [consult, setConsult] = useState("");
  const { dispatch } = useContext(Context);
  return (
    <div className="form">
      <Input
        placeholder="Name"
        onChange={(e) => setConsult(e.target.value)}
        value={consult}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch({ type: "ADD_ITEM", payload: consult })}
      >
        Agregar
      </Button>
    </div>
  );
};

export default Form;
