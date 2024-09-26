import React, { createContext, useContext, useState, useEffect } from "react";

type UserType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  photoURl?: string | null;
};

const UserContext = createContext<UserType | null>(null);
export default UserContext;
