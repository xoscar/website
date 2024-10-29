'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface IProps {
  children: React.ReactNode;
}

const ReactQueryProvider = ({ children }: IProps) => {
  const [client] = React.useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
