import React from "react";
// import { useReducer } from "react";
import { useImmerReducer } from 'use-immer';

import { initialState, reducer, ACTIONS } from "../reducer/interfaceReducer";
export const InterfaceContext = React.createContext();
export const InterfaceProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const value = {
    interfaceData: state.interfaceData,
    currentEdit: state.currentEdit,
    updateData: (id, field, type, required) => {
      const dataToUpdate = {
        id,
        field,
        type,
        required,
      };
      dispatch({ type: ACTIONS.UPDATE_DATA, dataToUpdate });
    },
    addData: (id) => {
      dispatch({ type: ACTIONS.ADD_DATA, id });
    },
    deleteData: (id) => {
      dispatch({ type: ACTIONS.DELETE_DATA, id });
    },
    setCurrentEdit: (id) => {
      dispatch({ type: ACTIONS.SET_CURRENT_EDIT, id });
    },
  };

  return (
    <InterfaceContext.Provider value={value}>
      {children}
    </InterfaceContext.Provider>
  );
};
