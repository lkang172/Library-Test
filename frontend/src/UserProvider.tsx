import React, { useContext, useEffect, useState, ReactNode } from "react";
import UserContext from "./UserContext";
import { monitorAuthState } from "./firebaseAuth";

type UserType = {
  uid: string;
  displayName?: string | null;
  email?: string | null;
  photoURl?: string | null;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const unsubscribe = monitorAuthState(setUser);
    return () => unsubscribe();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
