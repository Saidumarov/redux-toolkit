"use client";
import React, { createContext } from "react";
import { useState } from "react";
export const Users = createContext();
function DataProvider({ children }) {
  const [userData, setUserData] = useState();

  return (
    <div>
      <Users.Provider
        value={{
          userData,
          setUserData,
        }}
      >
        {children}
      </Users.Provider>
    </div>
  );
}

export default DataProvider;
