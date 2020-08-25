import React, { useReducer, createContext } from "react";
export const Context = createContext<any>({});

function reducer(state: any, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_ITEM":
      return state.concat(payload);
    default:
      return state;
  }
}

export const Store = (props: any) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};
