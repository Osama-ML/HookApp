import React from "react";
import { AppRouter } from "./AppRouter";
import {UserContext} from "./UserContext"

export const MainApp = () => {

  const user = {
    id: 123,
    name: 'Osama',
    email: 'osama@react.com'
  }

  return(
    <UserContext.Provider value={user}>
      <AppRouter></AppRouter>
    </UserContext.Provider>
  );
};
