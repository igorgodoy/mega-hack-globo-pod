import React from 'react';

import { AuthProvider } from './auth';

interface AppProviderProps {
  children: any;
}

const AppProvider: React.FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => <AuthProvider>{children}</AuthProvider>;

export default AppProvider;
