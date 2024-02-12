import React, { createContext, useContext } from 'react';
import { postAxios } from '@/helpers/axios';

export const ServerContext = createContext(null);

export const useServer = () => useContext(ServerContext);

class ServerApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API;
  }

  CreateContact = (data) => {
    return new Promise((resolve, reject) => {
      postAxios(`${this.baseUrl}/api/contacto`, data)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  };

}

export const ServerProvider = ({ children }) => (
  <ServerContext.Provider value={new ServerApi()}>{children}</ServerContext.Provider>
);
