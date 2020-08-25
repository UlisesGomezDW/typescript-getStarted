import React, { useContext } from "react";
import ItemOption from "./views/option";
import Form from "./views/form";
import { Context } from "./store";
import "./styles.css";

export default function App() {
  const { state } = useContext(Context);
  return (
    <div className="App">
      <Form />
      {state.length > 0 ? <ItemOption data={state} /> : <p>No hay nombres</p>}
    </div>
  );
}
