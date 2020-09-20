import React, { createContext, useState, useReducer } from "react";
import Storage from "./../services/Storage";
import { PageContextKeys } from "./keys";

export const PageContext = createContext();
const initialState = {
  userName:
    Storage.get(PageContextKeys.userName) === null
      ? ""
      : Storage.get(PageContextKeys.userName),
  emailAddress: "",
  otpKey: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case PageContextKeys.userName:
      return {
        state,
        userName: action.payload,
      };
    case "SUCCESS":
      return {
        state,
        otpKey: action.payload,
      };
    default:
      return state;
  }
};
const PageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PageContext.Provider value={{ state, dispatch }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
