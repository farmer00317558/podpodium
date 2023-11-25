import React from 'react';
import state, { RootState } from './state';

export const AppContext = React.createContext<RootState>(state);
