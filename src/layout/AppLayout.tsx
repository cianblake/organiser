import { Box } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { AppLayoutProps } from './types';
import { StyledBox } from './styled';

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default AppLayout;
