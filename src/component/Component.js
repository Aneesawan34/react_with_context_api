import React, { useContext, useEffect } from "react";
import { PageContext } from "./../pagecontext/PageContext";
import { PageContextKeys } from "./../pagecontext/keys";
import Storage from "./../services/Storage";

const Component = () => {
  const { state, dispatch } = useContext(PageContext);
  const { userName } = state;
  // only run one time
  useEffect(() => {
    const getuserName = () => {
      dispatch({ type: PageContextKeys.userName, payload: "Anees" });
    };
    getuserName();
  }, []);
  // only run when user name change
  useEffect(() => {
    Storage.set(PageContextKeys.userName, userName);
  }, [userName]);

  return (
    <div>
      <h2>Hello Componet One</h2>
      <button
        onClick={() => {
          dispatch({ type: PageContextKeys.userName, payload: "Saboor" });
        }}
      >
        Click me
      </button>
      <div>Hello {userName}</div>
    </div>
  );
};

export default Component;
