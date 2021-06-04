import { useState, useContext, createContext, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export const useContext = () => {
	return useContext(Context);
};
