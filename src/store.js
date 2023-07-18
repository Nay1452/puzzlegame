import React, { createContext } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';

export const LotteryContext = createContext();

const store = createStore(rootReducer);

const StoreProvider = ({ children }) => {
  return (
    <LotteryContext.Provider value={store}>
      {children}
    </LotteryContext.Provider>
  );
};

export default StoreProvider;
