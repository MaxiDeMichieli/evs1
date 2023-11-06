import { createContext, useContext as useReactContext, useState } from 'react';

const Context = createContext({});

export const ContextProvider = ({ children }: any) => {
  const [context, setContext] = useState({});

  return (
    <Context.Provider value={{ context, setContext }}>
      {children}
    </Context.Provider>
  );
};

export const useContext = () => {
  return useReactContext(Context);
};
